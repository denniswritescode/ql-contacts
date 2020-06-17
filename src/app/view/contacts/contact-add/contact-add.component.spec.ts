import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FakeViewportService } from './../../../testing/viewport.service.fake';
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
          observers.push(observer);
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
    open: () => { },
  };

  beforeEach(async(() => {
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
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    viewport = new FakeViewportService();
    fixture = TestBed.createComponent(ContactAddComponent);
    component = fixture.componentInstance;
    component.viewport = viewport;
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
});
