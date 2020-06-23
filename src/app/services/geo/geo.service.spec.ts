import { async } from '@angular/core/testing';

import { asyncData } from 'src/app/testing/testing.helpers';
import { EnvironmentTestService } from '../environment/environment-test.service';
import { EnvironmentService } from '../environment/environment.service';
import { GeoService } from './geo.service';

describe('GeoService', () => {
  let service: GeoService;
  let httpClientSpy: { get: jasmine.Spy };
  const env = new EnvironmentTestService() as EnvironmentService;

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', [ 'get' ]);
    httpClientSpy.get.and.returnValue(asyncData([ 'Michigan' ]));

    service = new GeoService(
      httpClientSpy as any,
      env,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reachout to endpoint', () => {
    service.get('states');
    expect(httpClientSpy.get).toHaveBeenCalledWith(env.US_STATES_API);
  });

  it('should get correct data',
    async(() => {
      const dataChecker = (data) => {
        expect(Array.isArray(data)).toBeTruthy();
        expect(data.length).toBe(1);
        expect(data[0]).toBe('Michigan');
      };
      service.get('states')
        .subscribe(dataChecker);
    })
  );

  it('should throw error if we request invalid data types',
    async(() => {
      try {
        service.get('countries');
      } catch (e) {
        expect(e instanceof Error).toBeTruthy();
        expect(e.message).toBe('countries is not a valid option on the Geo service.');
      }
    })
  );
});
