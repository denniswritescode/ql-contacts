import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCellComponent } from './name-cell.component';

describe('NameCellComponent', () => {
  let component: NameCellComponent;
  let fixture: ComponentFixture<NameCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCellComponent);
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
