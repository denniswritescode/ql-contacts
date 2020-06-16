import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmittableInputComponent } from './emittable-input.component';

describe('EmittableInputComponent', () => {
  let component: EmittableInputComponent;
  let fixture: ComponentFixture<EmittableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmittableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmittableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
