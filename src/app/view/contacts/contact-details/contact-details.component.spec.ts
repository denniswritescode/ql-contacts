import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';
import { FakeViewportService } from './../../../testing/viewport.service.fake';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let viewport: FakeViewportService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactDetailsComponent,
        MockComponent({
          selector: 'app-detail-item',
          inputs: [ 'icon', 'label', 'value' ],
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    viewport = new FakeViewportService();
    component.viewport = viewport;
    component.contact = {
      _id: '5de91c005b98615393e74931',
      index: 0,
      firstName: 'Browning',
      lastName: 'Graham',
      company: 'MELBACOR',
      email: 'browninggraham@melbacor.com',
      phone: '+1 (906) 585-2525',
      address: '920 Hastings Street, Roosevelt, Puerto Rico, 5573',
    };
    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to viewport stateObserver', () => {
    expect(component.subscription).toBeTruthy();
    expect(component.subscription.unsubscribe).toBeDefined();
  });

  it('should arrage data for presentation', () => {
    expect(component.details.length).toBe(4);
  });

  it('should react to breakpoint changes',
    fakeAsync(() => {
      viewport.setState(FakeViewportService.STATES.FULLSCREEN);
      tick();
      expect(component.displayedItems.length).toBe(2);

      viewport.setState(FakeViewportService.STATES.MOBILE);
      tick();
      expect(component.displayedItems.length).toBe(4);
    })
  );
});
