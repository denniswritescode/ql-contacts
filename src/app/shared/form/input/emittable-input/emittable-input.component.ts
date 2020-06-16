import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * Sample Template:
 * <input
 *   [formControl]="con"
 *   [(ngModel)]="model"
 *   (ngModelChange)="modelChange.emit(model)" />
 */

@Component({
  selector: 'app-emittable-input',
  template: ``,
})
export abstract class EmittableInputComponent {

  // Two-way bound value of the input.
  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();

  // Two-way bound value of the input's status/state.
  @Input() state: string;
  @Output() stateChange = new EventEmitter<string>();

  @Input() name: string;
  @Input() required: boolean;

  public con: FormControl;

  constructor() {
    this.createFormControl();
    this.con.statusChanges
      .subscribe(this.updateState.bind(this));
  }

  abstract createFormControl();

  updateState(state) {
    this.state = state;
    this.stateChange.emit(this.state);
  }
}