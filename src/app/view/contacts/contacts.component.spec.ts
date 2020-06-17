import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, Observable } from 'rxjs';
import { BreakpointService } from 'src/app/services/viewport/viewport.service';
import { PhonePipe } from './../../pipes/phone.pipe';
import { TruncatePipe } from './../../pipes/truncate.pipe';

import { MockComponent } from 'ng2-mock-component';

import { IContact } from 'src/app/interfaces/shared.interfaces';
import { FakeViewportService } from 'src/app/testing/viewport.service.fake';
import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let viewport: FakeViewportService;
  let fixture: ComponentFixture<ContactsComponent>;
  const oneContact: IContact = {
    _id: '5de91c005b98615393e74931',
    index: 0,
    firstName: 'Browning',
    lastName: 'Graham',
    company: 'MELBACOR',
    email: 'browninggraham@melbacor.com',
    phone: '+1 (906) 585-2525',
    address: '920 Hastings Street, Roosevelt, Puerto Rico, 5573',
  };
  const observers = [];
  const contactsObservable: Observable<IContact[]> = new Observable((observer) => {
    observers.push(observer);
    return { unsubscribe() { } };
  });

  beforeEach(() => {
    viewport = new FakeViewportService();
    TestBed.configureTestingModule({
      declarations: [
        ContactsComponent,
        // we're testing top-level functionality of the contacts component...
        // the components below will be tested in their own specs. (or they are
        // small third party components whose code doesn't need to be "double tested"
        // by us. So we mock them.)
        MockComponent({ selector: 'app-contact-details', inputs: [ 'contact' ] }),
        MockComponent({ selector: 'app-name-cell', inputs: [ 'contact', 'mobile' ] }),
        MockComponent({ selector: 'app-name-header', inputs: [ 'mobile' ] }),
        MockComponent({ selector: 'app-phone-cell', inputs: [ 'phone' ] }),
        MockComponent({ selector: 'mat-icon' }),
        MockComponent({ selector: 'mat-spinner' }),
        MockComponent({ selector: 'mat-paginator', inputs: [ 'length', 'pageSize', 'pageIndex' ] }),
        PhonePipe,
        TruncatePipe,
      ],
      imports: [
        MatTableModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: BreakpointService, useValue: viewport },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    component.list = contactsObservable;
    component.viewport = viewport;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to the viewport and the contact list', () => {
    expect(component.subscriptions.length).toBe(2);
  });

  it('should react to changes in breakpoint',
    fakeAsync(() => {
      viewport.setState(FakeViewportService.STATES.FULLSCREEN);
      tick();
      expect(component.displayedColumns.length).toBe(4);

      viewport.setState(FakeViewportService.STATES.MOBILE);
      tick();
      expect(component.displayedColumns.length).toBe(1);
    })
  );

  it('should user the viewport service for responsive data',
    fakeAsync(() => {
      viewport.setState(FakeViewportService.STATES.FULLSCREEN);
      tick();
      expect(viewport.mobile()).toBe(false);
      expect(component.mobile()).toBe(false);

      viewport.setState(FakeViewportService.STATES.MOBILE);
      tick();
      expect(viewport.mobile()).toBe(true);
      expect(component.mobile()).toBe(true);
    })
  );

  it('retrieve the contacts list, and populate the data source',
    fakeAsync(() => {
      expect(component.dataLength).toBeUndefined();
      expect(component.dataSource).toBeUndefined();

      observers.forEach(o => o.next([ oneContact ]));
      tick();

      expect(component.dataLength).toBe(1);
      expect(component.dataSource).toBeTruthy();
    })
  );
});
