import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { IQLFormInputConfiguration } from 'src/app/interfaces/shared.interfaces';

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

  @Input() config: IQLFormInputConfiguration;

  public con: FormControl;
  protected validators: ValidatorFn[] = [];

  constructor() {
    this.config = this.config || { };
  }

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
    if (this.config.validation?.required) {
      this.validators.push(Validators.required);
    }

    if (this.config.validation?.maxLength !== undefined) {
      this.validators.push(Validators.maxLength(this.config.validation.maxLength));
    }

    if (this.config.validation?.minLength !== undefined) {
      this.validators.push(Validators.minLength(this.config.validation.minLength));
    }

    if (this.config.validation?.pattern !== undefined) {
      this.validators.push(Validators.pattern(this.config.validation.pattern));
    }

    if (this.config.validation?.numbersOnly !== undefined) {
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
