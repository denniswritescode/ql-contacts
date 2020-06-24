import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ErrorHandlerService {

  protected abstract name: string;

  constructor() {
    // the error handler is executed in a different context by angular, making
    // if problematic when we reference ${this.name}. If we bind to 'this' in
    // the constructor there are no issues.
    this.errorHandler = this.errorHandler.bind(this);
  }

  errorHandler(error) {
    console.error(`${this.name} Service Error`, error);

    return throwError(`${this.name} Service Error`);
  }
}
