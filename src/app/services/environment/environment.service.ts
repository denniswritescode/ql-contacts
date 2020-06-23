import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  public readonly CONTACT_API: string = 'https://demo5838836.mockable.io/';
  public readonly CONTACT_API2: string = 'https://demo4924906.mockable.io/';
  public readonly US_STATES_API: string = 'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json';
}
