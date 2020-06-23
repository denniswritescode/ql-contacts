import { Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { IViewportService } from 'src/app/interfaces/shared.interfaces';
import { ViewportConstants } from 'src/app/services/viewport/viewport.constants';

export class FakeViewportService implements IViewportService {

  private subject: BehaviorSubject<string> = new BehaviorSubject(ViewportConstants.STATES.MOBILE);
  private state: string;

  public readonly stateObserver: Observable<string> = this.subject.asObservable();
  public readonly breaks: string[] = [
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ];

  constructor() { }

  getState(): string {
    return this.state;
  }

  setState(value: string): void {
    this.state = value;
    this.subject.next(this.state);
  }

  setFullscreen(): void {
    this.setState(ViewportConstants.STATES.FULLSCREEN);
  }

  setMobile(): void {
    this.setState(ViewportConstants.STATES.MOBILE);
  }

  fullscreen(): boolean {
    return this.state === ViewportConstants.STATES.FULLSCREEN;
  }

  mobile(): boolean {
    return this.state === ViewportConstants.STATES.MOBILE;
  }
}
