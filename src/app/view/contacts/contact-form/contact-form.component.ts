import { Component } from '@angular/core';
import { IQLFormInput } from './../../../interfaces/shared.interfaces';

import { FunTitleService } from 'src/app/services/fun-title/fun-title.service';
import { CONTACT_FORM_CONFIG } from './contact-form.config';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact-form.component.scss' ],
})
export class ContactFormComponent {

  public formData: IQLFormInput[] = CONTACT_FORM_CONFIG;

  constructor(private fun: FunTitleService) { }

  formValid() {
    return this.formData.every(input => input.state === 'VALID');
  }

  serialize() {
    const entries = new Map(this.formData.map((el) => [ el.key, el.value ]));
    // @ts-ignore
    return JSON.stringify(Object.fromEntries(entries), null, '  ');
  }

  announce() {
    console.log('FORM VALID.');
    console.log(this.fun.$ucce$$);
    console.log('DATA:');
    console.log(this.serialize());
  }

  detest() {
    console.log('Not Valid', this.formData.map((el) => ({ key: el.key, state: el.state })));
  }

  createContact() {
    if (this.formValid()) {
      this.announce();
    } else {
      this.detest();
    }
  }
}
