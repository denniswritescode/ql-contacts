import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhonePipe } from '../../../../pipes/phone.pipe';

import { PhoneCellComponent } from './phone-cell.component';

describe('PhoneCellComponent', () => {
  let component: PhoneCellComponent;
  let fixture: ComponentFixture<PhoneCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneCellComponent,
        PhonePipe,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCellComponent);
    component = fixture.componentInstance;
    component.phone = '+1 (313) 555-1212';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
