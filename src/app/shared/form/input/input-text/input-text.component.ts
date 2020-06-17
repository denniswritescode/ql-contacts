import { Component } from '@angular/core';
import { EmittableInputComponent } from 'src/app/shared/form/input/emittable-input/emittable-input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: [ './input-text.component.scss' ],
})
export class InputTextComponent extends EmittableInputComponent {

  constructor() {
    super();
  }

  extendedValidation() { }
}
