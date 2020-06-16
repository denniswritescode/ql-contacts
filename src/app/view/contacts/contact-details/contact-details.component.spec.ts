import { MockComponent } from 'ng2-mock-component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
