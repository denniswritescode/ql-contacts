import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeaderComponent } from './contact-header.component';
import { MockComponent } from 'ng2-mock-component';

describe('ContactHeaderComponent', () => {
  let component: ContactHeaderComponent;
  let fixture: ComponentFixture<ContactHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactHeaderComponent,
        MockComponent({ selector: 'app-contact-add'}),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
