import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { IQLFormInputValidation } from 'src/app/interfaces/shared.interfaces';

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
export abstract class EmittableInputComponent implements OnInit {

  // Two-way bound value of the input.
  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();

  // Two-way bound value of the input's status/state.
  @Input() state: string;
  @Output() stateChange = new EventEmitter<string>();

  @Input() name: string;
  @Input() placeholder: string;
  @Input() validation: IQLFormInputValidation = { };

  public con: FormControl;
  protected validators: ValidatorFn[] = [];

  constructor() { }

  ngOnInit() {
    this.passedValidation();
    this.extendedValidation();

    this.con = new FormControl('', this.validators);
    this.con.statusChanges
      .subscribe(this.updateState.bind(this));
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

  updateState(state) {
    this.state = state;
    this.stateChange.emit(this.state);
  }
}
