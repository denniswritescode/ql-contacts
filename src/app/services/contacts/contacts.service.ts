import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IContact } from '../../interfaces/shared.interfaces';
import { EnvironmentService } from '../environment/environment.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private subject: BehaviorSubject<IContact[] | []> = new BehaviorSubject([]);

  public readonly contacts: Observable<IContact[] | []> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private env: EnvironmentService,
  ) { }

  load(): Observable<IContact[] | []> {
    this.get()
      .subscribe((data: IContact[]) => {
        this.subject.next(data);
      });

    return this.contacts;
  }

  get(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.env.API2URL}/contact`);
  }
}
