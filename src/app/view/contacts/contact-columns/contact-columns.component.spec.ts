import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactColumnsComponent } from './contact-columns.component';

describe('ContactColumnsComponent', () => {
  let component: ContactColumnsComponent;
  let fixture: ComponentFixture<ContactColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactColumnsComponent);
    component = fixture.componentInstance;
    component.column = {
      name: 'hey',
      header: 'dude',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
