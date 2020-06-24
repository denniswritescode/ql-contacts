import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentTestService {
  public readonly CONTACT_API: string = '';
  public readonly CONTACT_API2: string = '';
  public readonly US_STATES_API: string = 'http://test-states/';
}
