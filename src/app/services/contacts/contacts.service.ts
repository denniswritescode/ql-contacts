import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IContact } from '../../interfaces/shared.interfaces';
import { EnvironmentService } from '../environment/environment.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {

  constructor(
    private http: HttpClient,
    private env: EnvironmentService,
  ) { }

  get(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.env.API2URL}/contact`);
  }
}
