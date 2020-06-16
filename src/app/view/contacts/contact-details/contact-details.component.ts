import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/interfaces/shared.interfaces';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: [ './contact-details.component.scss' ],
})
export class ContactDetailsComponent implements OnInit {

  @Input() contact: IContact;

  public details = [
    {
      label: 'Email',
      icon: 'email',
      value: this.contact.email,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
