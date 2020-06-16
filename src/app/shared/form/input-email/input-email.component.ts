import { EmittableInputComponent } from 'src/app/shared/form/input/emittable-input/emittable-input.component';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent extends EmittableInputComponent {

  constructor() {
    super();
  }

  createFormControl() {
    this.con = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }
}
