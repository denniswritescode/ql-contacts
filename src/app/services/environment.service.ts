import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public readonly APIURL = 'http://demo5838836.mockable.io/';
  public readonly API2URL = 'http://demo4924906.mockable.io/';
}
