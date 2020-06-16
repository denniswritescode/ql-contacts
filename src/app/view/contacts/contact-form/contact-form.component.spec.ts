import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockComponent } from 'ng2-mock-component';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactFormComponent,
        MockComponent({
          selector: 'app-input-text',
          inputs: [ 'name', 'value', 'placeholder', 'state', 'validation' ],
        }),
        MockComponent({
          selector: 'app-input-email',
          inputs: [ 'name', 'value', 'placeholder', 'state', 'validation' ],
        }),
        MockComponent({
          selector: 'app-input-phone',
          inputs: [ 'name', 'value', 'placeholder', 'state', 'validation' ],
        }),
        MockComponent({ selector: 'mat-hint' }),
      ],
      providers: [
        {
          provide: MatDialogRef, useValue: { close: () => { } },
        },
      ],
      imports: [
        MatDialogModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
