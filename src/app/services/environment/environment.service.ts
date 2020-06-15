import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public readonly APIURL: string = 'http://demo5838836.mockable.io/';
  public readonly API2URL: string = 'http://demo4924906.mockable.io/';
}
