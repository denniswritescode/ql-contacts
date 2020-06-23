import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IViewportService } from 'src/app/interfaces/shared.interfaces';
import { ViewportConstants } from './viewport.constants';

@Injectable({
  providedIn: 'root',
})
export class ViewportService implements IViewportService {

  private subject: BehaviorSubject<string> = new BehaviorSubject(ViewportConstants.STATES.MOBILE);
  private state: string;

  public readonly stateObserver: Observable<string> = this.subject.asObservable();
  public readonly breaks: string[] = [
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ];

  constructor(private observer: BreakpointObserver) {
    observer
      .observe(this.breaks)
      .subscribe(this.breakpointUpdateHandler.bind(this));
  }

  breakpointUpdateHandler(breakpoint): void {
    this.state = breakpoint.matches ?
      ViewportConstants.STATES.FULLSCREEN :
      ViewportConstants.STATES.MOBILE;

    this.subject.next(this.state);
  }

  getState(): string {
    return this.state;
  }

  fullscreen(): boolean {
    return this.state === ViewportConstants.STATES.FULLSCREEN;
  }

  mobile(): boolean {
    return this.state === ViewportConstants.STATES.MOBILE;
  }
}
