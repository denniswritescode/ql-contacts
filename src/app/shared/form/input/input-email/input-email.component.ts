import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { EmittableInputComponent } from 'src/app/shared/form/input/emittable-input/emittable-input.component';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: [ './input-email.component.scss' ],
})
export class InputEmailComponent extends EmittableInputComponent {

  constructor() {
    super();
  }

  extendedValidation() {
    this.validators.push(Validators.email);
  }
}
