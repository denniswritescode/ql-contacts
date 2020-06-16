import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  public readonly APIURL: string = 'https://demo5838836.mockable.io/';
  public readonly API2URL: string = 'https://demo4924906.mockable.io/';
}
