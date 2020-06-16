import { IQLFormInput } from './../../../interfaces/shared.interfaces';
import { Component } from '@angular/core';

import { CONTACT_FORM_CONFIG } from './contact-form.config';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  public formData: IQLFormInput[] = CONTACT_FORM_CONFIG;

  constructor() {}

  formValid() {
    return this.formData.every(input => input.state === 'VALID');
  }

  serialize() {
    const entries = new Map(this.formData.map((el) => [el.key, el.value]));
    return JSON.stringify(Object.fromEntries(entries), null, '  ');
  }

  createContact() {
    if (this.formValid()) {
      console.log('Form Valid', this.serialize());
    } else {
      console.log('Not Valid', this.formData.map((el) => ({ key: el.key, state: el.state })));
    }

  }

}
