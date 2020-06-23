import { Observable } from 'rxjs';

export interface IBaseContact {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface IContact extends IBaseContact {
  _id: string;
  index: number;
}

export interface IFormContact extends IBaseContact {
  address2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IQLFormInput {
  state: string;
  value: string | number;
  autocomplete?: string[];
  config?: IQLFormInputConfiguration;
}

export interface IQLFormInputConfiguration {
  validation?: IQLFormInputValidation;
  name?: string;
  id?: string;
  format?: string;
  placeholder?: string | number;
  charCount?: number;
}

/*
 * The idea is to implement many of the angular validators, but I probably
 * won't get them all.
 * https://angular.io/api/forms/Validators
 */
export interface IQLFormInputValidation {
  required?: boolean;
  number?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp | string;
  numbersOnly?: boolean;
}

export interface IViewportService {
  readonly stateObserver: Observable<string>;
  readonly breaks: string[];

  getState(): string;
  fullscreen(): boolean;
  mobile(): boolean;
}
