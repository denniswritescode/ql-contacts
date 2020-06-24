import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITOKENS } from 'src/app/shared/injection.tokens';
import { FakeViewportService } from 'src/app/testing/viewport.service.fake';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactAddComponent } from './contact-add.component';

describe('ContactAddComponent', () => {
  let component: ContactAddComponent;
  let fixture: ComponentFixture<ContactAddComponent>;
  let viewport: FakeViewportService;
  const observers = [];
  const fakeDialogRef = {
    afterClosed: () => {
      return {
        subscribe: (observer) => {
          observers.push({ next: observer });
        },
      };
    },
  };
  const fakeMatDialog = {
    // tslint:disable-next-line: no-shadowed-variable
    open: (component, options) => {
      return fakeDialogRef;
    },
  };
  const fakeMatSnackBar = {
    // tslint:disable-next-line: no-shadowed-variable
    open: (message, action, options) => { },
  };

  beforeEach(async(() => {
    viewport = new FakeViewportService();
    const vpfactory = () => viewport;

    TestBed.configureTestingModule({
      declarations: [ ContactAddComponent ],
      providers: [
        {
          provide: MatDialog,
          useValue: fakeMatDialog,
        },
        {
          provide: MatSnackBar,
          useValue: fakeMatSnackBar,
        },
        {
          provide: ITOKENS.IViewportService,
          // Using 'useFactory' (as opposed to 'useValue') is the only way to
          // make sure the viewport our component uses is the EXACT same viewport
          // that's accessible to us outside of the component, and in our tests.
          // Consequently this is the only way to get the majority of our viewport
          // tests to pass because of the 'cloning issue'.
          // https://github.com/angular/angular/issues/10788
          useFactory: vpfactory.bind(this),
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(component).toBeTruthy();
  });

  it('should use MatDialog to open a dialog: FULLSCREEN', () => {
    spyOn(fakeMatDialog, 'open').and.callThrough();
    expect(fakeMatDialog.open).not.toHaveBeenCalled();
    viewport.mobile = () => false;

    component.openContactForm();

    expect(fakeMatDialog.open).toHaveBeenCalledWith(
      ContactFormComponent,
      { width: '50vw', height: '80vh' },
    );
  });

  it('should use MatDialog to open a dialog: MOBILE', () => {
    spyOn(fakeMatDialog, 'open').and.callThrough();
    expect(fakeMatDialog.open).not.toHaveBeenCalled();
    viewport.mobile = () => true;

    component.openContactForm();

    expect(fakeMatDialog.open).toHaveBeenCalledWith(
      ContactFormComponent,
      { width: '80vw', height: '80vh' },
    );
  });

  it('should show success message (snack bar) contact was created',
    fakeAsync(() => {
      spyOn(fakeMatSnackBar, 'open');
      expect(fakeMatSnackBar.open).not.toHaveBeenCalled();

      component.openContactForm();

      observers.forEach(o => o.next('success'));
      tick();

      expect(fakeMatSnackBar.open).toHaveBeenCalledWith(
        'Contact created!',
        'close',
        { duration: 3000 },
      );
    })
  );

  it('should NOT show success message (snack bar) contact was created',
    fakeAsync(() => {
      spyOn(fakeMatSnackBar, 'open');
      expect(fakeMatSnackBar.open).not.toHaveBeenCalled();

      component.openContactForm();

      observers.forEach(o => o.next(undefined));
      tick();

      expect(fakeMatSnackBar.open).not.toHaveBeenCalled();
    })
  );
});
