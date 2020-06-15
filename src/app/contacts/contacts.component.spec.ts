import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { NgZone } from '@angular/core';

import { ContactsComponent } from './contacts.component';
import { Observable, of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let breakpointObservers = [];
  let mobileBreakpointState: BreakpointState = {
    matches: false,
    breakpoints: {
      [Breakpoints.Handset]: true,
    }
  };
  let fullscreenBreakpointState: BreakpointState = {
    matches: true,
    breakpoints: {
      [Breakpoints.Medium]: true,
      [Breakpoints.Large]: true,
      [Breakpoints.XLarge]: true,
    }
  };

  //let fakeBreakpointObserver: BreakpointObserver = class {
  class FakeFPObserver {
    observe(value: string | string[]): Observable<BreakpointState> {
      function subscriber(observer) {
        breakpointObservers.unshift(observer);
        // breakpointObservers.push(observer);

        return {unsubscribe() {}};
      }

      return new Observable<BreakpointState>(subscriber);
    }
    isMatched(value: string | string[]): boolean {
      return true;
    }
    ngOnDestroy(){}
  }

  let fakeBreakpointObserver = new FakeFPObserver() as BreakpointObserver;

  describe('General Tests', () => {
    component = new ContactsComponent(fakeBreakpointObserver);
    it('should create instance', () => {
      expect(component).toBeTruthy();
    });
  });

  beforeEach(async(() => {
    breakpointObservers = [];
  }));

  describe('Breakpoint Tests (Responsiveness: Desktop)', () => {
    it('should know the screen', () => {
      let desktopBreakpointTest = (bs) => {
        expect(bs.matches).toBeTrue();
        expect(component.setFullLayout).toHaveBeenCalled();
        expect(component.setMobileLayout).not.toHaveBeenCalled();
        expect(component.displayedColumns).toContain('phone');
      };

      fakeBreakpointObserver
        .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
        .subscribe(desktopBreakpointTest.bind(this));

      component = new ContactsComponent(fakeBreakpointObserver);
      spyOn(component, 'setMobileLayout').and.callThrough();
      spyOn(component, 'setFullLayout').and.callThrough();

      breakpointObservers.forEach(o => o.next(fullscreenBreakpointState));
    });
  });
  
  describe('Breakpoint Tests (Responsiveness: Mobile)', () => {
    it('should know the screen', () => {
      let mobileBreakpointTest = (bs) => {
        expect(bs.matches).toBeFalse();
        expect(component.setFullLayout).not.toHaveBeenCalled();
        expect(component.setMobileLayout).toHaveBeenCalled();
        expect(component.displayedColumns).not.toContain('phone');
      };

      fakeBreakpointObserver
        .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
        .subscribe(mobileBreakpointTest.bind(this));
        
      component = new ContactsComponent(fakeBreakpointObserver);
      spyOn(component, 'setMobileLayout').and.callThrough();
      spyOn(component, 'setFullLayout').and.callThrough();

      breakpointObservers.forEach(o => o.next(mobileBreakpointState));
    });
  });

});
