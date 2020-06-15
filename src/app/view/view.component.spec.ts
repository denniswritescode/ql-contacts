import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent } from 'ng2-mock-component';

import { ViewComponent } from './view.component';
import { ContactsService } from '../services/contacts/contacts.service';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewComponent,
        MockComponent({ selector: 'app-header'}),
        MockComponent({ selector: 'app-contacts', inputs: ['list']}),
        MockComponent({ selector: 'app-footer'}),
      ],
      imports: [HttpClientTestingModule],
      providers: [ ContactsService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
