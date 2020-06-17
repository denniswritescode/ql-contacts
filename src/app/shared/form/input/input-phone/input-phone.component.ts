import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { EmittableInputComponent } from 'src/app/shared/form/input/emittable-input/emittable-input.component';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: [ './input-phone.component.scss' ],
})
export class InputPhoneComponent extends EmittableInputComponent {

  constructor() {
    super();
  }

  extendedValidation() {
    this.validators = this.validators.concat([
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern(/^[0-9]\d*$/),
    ]);
  }
}
