import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

const TESTAPI = 'https://test/';

@Injectable({
  providedIn: 'root',
})
class TestService extends ErrorHandlerService {
  protected name = 'Test';

  constructor(private http: HttpClient) {
    super();
  }

  get(): Observable<any> {
    return this.http.get<any>(TESTAPI)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}

describe('ErrorHandlerService', () => {
  let service: TestService;
  let http: HttpTestingController;
  const originalError = console.error;
  const mockError = jasmine.createSpy('mockError');

  beforeEach(async(() => {
    console.error = mockError;
  }));

  afterEach(async(() => {
    console.error = originalError;
    mockError.calls.reset();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ TestService ],
    });
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TestService);

    spyOn(service, 'errorHandler').and.callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call handler and log messages on error', () => {
    let response;
    let errorMessage;

    service.get()
      .subscribe((data) => {
        response = data;
      },
      (error) => {
        errorMessage = error;
      });

    http.expectOne(TESTAPI).flush('There was an error', {
      status: 404,
      statusText: 'The data was not found',
    });

    // Error handler should be called...
    expect(service.errorHandler).toHaveBeenCalled();

    expect(response).toBeUndefined();

    // The handler should receive the data we expect...
    // @ts-ignore
    const handlerArgs = service.errorHandler.calls.argsFor(0); // arguments from the first and only call.
    expect(handlerArgs[0].status).toBe(404);
    expect(handlerArgs[0].statusText).toBe('The data was not found');
    expect(handlerArgs[0] instanceof HttpErrorResponse).toBeTruthy();

    // console.error should have been called
    expect(mockError).toHaveBeenCalled();

    const consoleArgs = mockError.calls.argsFor(0);
    expect(consoleArgs[0]).toBe('Test Service Error');
    expect(consoleArgs[1] instanceof HttpErrorResponse).toBeTruthy();

    // The thrown error should be what we expect...
    expect(errorMessage).toBe('Test Service Error');
  });
});
