import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent } from 'ng2-mock-component';

import { MainComponent } from './main.component';
import { ContactsService } from '../services/contacts.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
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
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
