import { async } from '@angular/core/testing';

import { asyncData } from 'src/app/testing/testing.helpers';
import { EnvironmentTestService } from '../environment/environment-test.service';
import { EnvironmentService } from '../environment/environment.service';
import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
  let service: ContactsService;
  let httpClientSpy: { get: jasmine.Spy };
  const mock: any = require('../../testing/responses/contacts.json');

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', [ 'get' ]);
    httpClientSpy.get.and.returnValue(asyncData(mock));

    service = new ContactsService(
      httpClientSpy as any,
      new EnvironmentTestService() as EnvironmentService
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reachout to endpoint', () => {
    service.get();
    expect(httpClientSpy.get).toHaveBeenCalledWith('/contact');
  });

  it('should load the correct data', async(() => {
    const dataChecker = (data) => {
      expect(Array.isArray(data)).toBeTrue();
      expect(data.length).toBe(2);
    };

    service.get()
      .subscribe(dataChecker);
  }));
});
