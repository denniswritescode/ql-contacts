import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { IQLFormInputValidation } from 'src/app/interfaces/shared.interfaces';

/*
 * Sample Template:
 * <input matInput [formControl]="con">
 */

@Component({
  selector: 'app-emittable-input',
  template: ``,
})
export abstract class EmittableInputComponent implements OnInit {

  // Two-way bound value of the input.
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  // Two-way bound value of the input's status/state.
  @Input() state: string;
  @Output() stateChange = new EventEmitter<string>();

  @Input() name: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() validation: IQLFormInputValidation = { };

  public con: FormControl;
  protected validators: ValidatorFn[] = [];

  constructor() { }

  ngOnInit() {
    this.passedValidation();
    this.extendedValidation();

    this.con = new FormControl(this.value, this.validators);
    this.con.statusChanges
      .subscribe(this.updateState.bind(this));

    this.con.valueChanges
      .subscribe(this.updateValue.bind(this));
  }

  private passedValidation() {
    if (this.validation.required) {
      this.validators.push(Validators.required);
    }

    if (this.validation.maxLength !== undefined) {
      this.validators.push(Validators.maxLength(this.validation.maxLength));
    }

    if (this.validation.minLength !== undefined) {
      this.validators.push(Validators.minLength(this.validation.minLength));
    }

    if (this.validation.pattern !== undefined) {
      this.validators.push(Validators.pattern(this.validation.pattern));
    }

    if (this.validation.numbersOnly !== undefined) {
      this.validators.push(Validators.pattern(/^[0-9]\d*$/));
    }
  }

  abstract extendedValidation();

  updateValue(value) {
    this.valueChange.emit(this.con.value);
  }

  updateState(state) {
    this.state = state;
    this.stateChange.emit(this.state);
  }
}
