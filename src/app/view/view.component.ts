import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { IContact } from '../interfaces/shared.interfaces';
import { ContactsService } from '../services/contacts/contacts.service';

@Component({
  selector: 'app-main',
  templateUrl: './view.component.html',
  styleUrls: [ './view.component.scss' ],
})
export class ViewComponent implements OnInit {

  public contactList: Observable<IContact[] | []>;

  constructor( private contacts: ContactsService) { }

  ngOnInit(): void {
    this.contactList = this.contacts.get();
  }
}
