import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IState } from 'src/app/interfaces/shared.interfaces';
import { EnvironmentService } from 'src/app/services/environment/environment.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class GeoService extends ErrorHandlerService {

  protected name = 'Geo';

  constructor(
    private http: HttpClient,
    private env: EnvironmentService,
  ) {
    super();
  }

  get(type: string): Observable<any> {
    if (type === 'states') {
      return this.getStates();
    }

    throw Error(`${type} is not a valid option on the ${this.name} service.`);
  }

  getStates(): Observable<IState[]> {
    return this.http.get<IState[]>(this.env.US_STATES_API)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
