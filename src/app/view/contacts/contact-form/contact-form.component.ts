import { Component } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  public emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

}
