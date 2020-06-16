import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent } from 'ng2-mock-component';

import { InputPhoneComponent } from './input-phone.component';

describe('InputPhoneComponent', () => {
  let component: InputPhoneComponent;
  let fixture: ComponentFixture<InputPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputPhoneComponent,
        MockComponent({ selector: 'mat-hint' }),
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPhoneComponent);
    component = fixture.componentInstance;
    component.value = 'test';
    component.name = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
