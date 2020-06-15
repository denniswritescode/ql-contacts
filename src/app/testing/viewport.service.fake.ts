import { Observable, BehaviorSubject } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointService } from 'src/app/services/viewport/viewport.service';

export class FakeViewportService extends BreakpointService {
  static readonly STATES = {
    MOBILE: 'mobile',
    FULLSCREEN: 'fullScreen',
  };

  private subject: BehaviorSubject<string> = new BehaviorSubject(FakeViewportService.STATES.MOBILE);
  private state: string;

  public readonly stateObserver: Observable<string> = this.subject.asObservable();
  public readonly breaks: string[] = [
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ];

  constructor() {
    super();
  }

  getState(): string {
    return this.state;
  }

  setState(value: string): void {
    this.state = value;
    this.subject.next(this.state);
  }

  fullscreen(): boolean {
    return this.state === FakeViewportService.STATES.FULLSCREEN;
  }

  mobile(): boolean {
    return this.state === FakeViewportService.STATES.MOBILE;
  }
}
