import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { EnvironmentService } from '../environment/environment.service';
import { IContact } from '../../interfaces/shared.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _contacts: BehaviorSubject<IContact[] | []> = new BehaviorSubject([]); 

  public readonly contacts: Observable<IContact[] | []> = this._contacts.asObservable();

  constructor(
    private http: HttpClient,
    private env: EnvironmentService,
  ) {}

  load(): Observable<IContact[] | []> {
    this.get()
      .subscribe((data: IContact[]) => {
        this._contacts.next(data);
      });

      return this.contacts;
  }

  get(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.env.API2URL}/contact`);
  }
}
