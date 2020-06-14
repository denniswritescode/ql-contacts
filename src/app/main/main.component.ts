import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../services/contacts.service';
import { IContact } from '../shared/interfaces/shared.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public contactList: Observable<IContact[] | []>;

  constructor(private contacts: ContactsService) { }

  ngOnInit(): void {
    this.contactList = this.contacts.contacts;
  }
}
