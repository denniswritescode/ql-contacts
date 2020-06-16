import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export abstract class BreakpointService {
  public readonly stateObserver: Observable<string>;
  public readonly breaks: string[];
  readonly STATES: any;

  public abstract getState(): string;
  public abstract fullscreen(): boolean;
  public abstract mobile(): boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ViewportService extends BreakpointService {
  static readonly STATES = {
    MOBILE: 'mobile',
    FULLSCREEN: 'fullScreen',
  };

  private subject: BehaviorSubject<string> = new BehaviorSubject(ViewportService.STATES.MOBILE);
  private state: string;

  public readonly stateObserver: Observable<string> = this.subject.asObservable();
  public readonly breaks: string[] = [
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ];

  constructor(private observer: BreakpointObserver) {
    super();

    observer
      .observe(this.breaks)
      .subscribe(this.breakpointUpdateHandler.bind(this));
  }

  breakpointUpdateHandler(breakpoint): void {
    this.state = breakpoint.matches ?
      ViewportService.STATES.FULLSCREEN :
      ViewportService.STATES.MOBILE;

    this.subject.next(this.state);
  }

  getState(): string {
    return this.state;
  }

  fullscreen(): boolean {
    return this.state === ViewportService.STATES.FULLSCREEN;
  }

  mobile(): boolean {
    return this.state === ViewportService.STATES.MOBILE;
  }
}
