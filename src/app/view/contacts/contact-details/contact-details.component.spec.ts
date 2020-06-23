import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';
import { ITOKENS } from 'src/app/shared/injection.tokens';
import { FakeViewportService } from 'src/app/testing/viewport.service.fake';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let viewport: FakeViewportService;

  beforeEach(async(() => {
    viewport = new FakeViewportService();
    const vpfactory = () => viewport;

    TestBed.configureTestingModule({
      declarations: [
        ContactDetailsComponent,
        MockComponent({
          selector: 'app-detail-item',
          inputs: [ 'icon', 'label', 'value' ],
        }),
      ],
      providers: [
        {
          provide: ITOKENS.IViewportService,
          // Using 'useFactory' (as opposed to 'useValue') is the only way to
          // make sure the test on line 53 passes, and consequently, the only to
          // get the majority of our viewport tests to pass because of the 'cloning issue'.
          // https://github.com/angular/angular/issues/10788
          useFactory: vpfactory.bind(this),
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
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

  it('should use fake viewport', () => {
    expect(Object.is(component.viewport, viewport)).toBeTruthy();
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
      viewport.setFullscreen();
      tick();
      expect(component.displayedItems.length).toBe(2);

      viewport.setMobile();
      tick();
      expect(component.displayedItems.length).toBe(4);
    })
  );
});
