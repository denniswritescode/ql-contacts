import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { ContactsComponent } from './contacts.component';
import { Observable, of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let fullscreen = false;
  let subscriber;
  let fakeBreakpointObserver = {
    observe: (value: string | string[]): Observable<BreakpointState> => {
      if(!fullscreen) {
        return of<BreakpointState>({
          matches: false,
          breakpoints: {
            [Breakpoints.Handset]: true,
          }
        });
      } else {
        return of<BreakpointState>({
          matches: true,
          breakpoints: {
            [Breakpoints.Medium]: true,
            [Breakpoints.Large]: true,
            [Breakpoints.XLarge]: true,
          }
        });
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [ MatTableModule ],
      providers: [
        {
          provide: BreakpointObserver,
          useValue: fakeBreakpointObserver
        }
      ],
    })
    .compileComponents();
  }));

  describe('General Tests', () => {
    beforeEach(() => {
      fullscreen = false;
      fixture = TestBed.createComponent(ContactsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create instance', () => {
      expect(component).toBeTruthy();
    });
  });


  describe('Breakpoint Tests (Responsiveness: Mobile)', () => {
    beforeEach(() => {
      fullscreen = false;
      fixture = TestBed.createComponent(ContactsComponent);
      component = fixture.componentInstance;
      spyOn(component, 'setMobileLayout');
      fixture.detectChanges();
    });


    it('should use the mobile layout when on small screens', () => {
      expect(component.setMobileLayout).toHaveBeenCalled();
    });

  });
  
  // describe('Breakpoint Tests (Responsiveness: Desktop)', () => {
  //   beforeEach(() => {
  //     mobile = false;
  //     fixture = TestBed.createComponent(ContactsComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();
  //   });
  //   
  //   afterEach(() => {
  //     subscriber.unsubscribe();
  //   });

  //   it('should use the mobile layout when on small screens', () => {
  //     let desktopBreakpointTest = (bs) => {
  //       expect(component.mobile).toBeTruthy();
  //       expect(component.setMobileLayout).toHaveBeenCalled();
  //       expect(component.setFullLayout).not.toHaveBeenCalled();
  //     };

  //     subscriber = fakeBreakpointObserver
  //       .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
  //       .subscribe(desktopBreakpointTest.bind(this));
  //   });
  // });
});
