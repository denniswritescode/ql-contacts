import { async } from '@angular/core/testing';
import { defer }from 'rxjs';
import { skipWhile }from 'rxjs/operators';

import { ContactsService } from './contacts.service';
import { EnvironmentService } from './environment.service';
import { EnvironmentTestService } from './environment-test.service';


function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('ContactsService', () => {
  let service: ContactsService;
  let httpClientSpy: { get: jasmine.Spy };
  let mock: any = require('../mocks/contacts.json');

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(asyncData(mock));

    service = new ContactsService(
      <any> httpClientSpy,
      new EnvironmentTestService() as EnvironmentService
    );
    spyOn(service, 'get').and.callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reachout to endpoint', () => {
    service.load();
    expect(service.get).toHaveBeenCalled();
    expect(httpClientSpy.get).toHaveBeenCalledWith('/contact');
  });

  it('should load the correct data', async(() => {
    let dataChecker = (data) => {
      expect(Array.isArray(data)).toBeTrue();
      expect(data.length).toBe(2);
    };

    service.load()
      .pipe(
        skipWhile(
          // we skip the initial state of an empty array and test on everything
          // else...
          value => Array.isArray(value) && value.length === 0
        )
      ).subscribe(dataChecker);
  }));
});
