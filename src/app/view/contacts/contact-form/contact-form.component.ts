import { Component } from '@angular/core';
import { IBaseContact, IFormContact, IQLFormInput } from 'src/app/interfaces/shared.interfaces';
import { FunTitleService } from 'src/app/services/fun-title/fun-title.service';
import { CONTACT_FORM_CONFIG } from './contact-form.config';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact-form.component.scss' ],
})
export class ContactFormComponent {

  public formData: IQLFormInput[] = CONTACT_FORM_CONFIG;
  public isLoading = false;

  constructor(
    private fun: FunTitleService,
    private dialogRef: MatDialogRef<ContactFormComponent>,
  ) { }

  formValid() {
    return this.formData.every(input => input.state === 'VALID' || input.key === 'address2');
  }

  serialize() {
    const entries = new Map(this.formData.map((el) => [ el.key, el.value ]));
    // @ts-ignore
    const payload = this.prepare(Object.fromEntries(entries));

    return JSON.stringify(payload, null, '  ');
  }

  prepare(obj: IFormContact): IBaseContact {
    const addressArray = [ obj.address, obj.city, obj.state, obj.zipCode ];

    if (obj.address2) {
      addressArray.splice(1, 0, obj.address2);
    }

    obj.address = addressArray.join(', ');

    delete obj.address2;
    delete obj.city;
    delete obj.state;
    delete obj.zipCode;

    return obj;
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
    this.isLoading = true;

    if (this.formValid()) {
      this.announce();
      setTimeout(() => { this.dialogRef.close('success'); }, 3000);
    } else {
      this.detest();
    }
  }
}
