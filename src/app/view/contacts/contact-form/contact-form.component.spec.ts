import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockComponent } from 'ng2-mock-component';
import { FunTitleService } from './../../../services/fun-title/fun-title.service';
import {
  CONTACT_SAMPLE_EMPTY_DETESTMENT_ARRAY,
  CONTACT_SAMPLE_EMPTY_SERIALIZATION,
  CONTACT_SAMPLE_FORM_DATA,
  CONTACT_SAMPLE_FORM_PAYLOAD,
  CONTACT_SAMPLE_FORM_PAYLOAD2,
  CONTACT_SAMPLE_IFORMCONTACT,
  CONTACT_SAMPLE_IFORMCONTACT2,
  CONTACT_SAMPLE_SERIALIZATION,
} from './contact-form.sample';

import { EnvironmentTestService } from 'src/app/services/environment/environment-test.service';
import { EnvironmentService } from 'src/app/services/environment/environment.service';
import { GeoService } from 'src/app/services/geo/geo.service';
import { asyncData } from 'src/app/testing/testing.helpers';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let geo;
  let httpClientSpy: { get: jasmine.Spy };
  const fakeDialogRef = {
    close: jasmine.createSpy('dialogClose'),
  };

  beforeEach(async(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [ 'get' ]);
    httpClientSpy.get.and.returnValue(
      asyncData([ {
        name: 'Michigan',
        abbreviation: 'MI',
      } ])
    );

    geo = new GeoService(
      httpClientSpy as any,
      new EnvironmentTestService() as EnvironmentService
    );

    TestBed.configureTestingModule({
      declarations: [
        ContactFormComponent,
        MockComponent({
          selector: 'app-input-text',
          inputs: [ 'autocomplete', 'value', 'state', 'config' ],
        }),
        MockComponent({ selector: 'mat-hint' }),
        MockComponent({ selector: 'mat-spinner' }),
      ],
      providers: [
        {
          provide: MatDialogRef, useValue: fakeDialogRef,
        },
        {
          provide: GeoService,
          useValue: geo,
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

  it('should create instance', () => {
    expect(component).toBeTruthy();
  });

  it('should serialize formData for the console', () => {
    component.formData = CONTACT_SAMPLE_FORM_DATA;
    expect(component.serialize()).toBe(CONTACT_SAMPLE_SERIALIZATION);
  });

  it('should prepare payload for create call', () => {
    expect(JSON.stringify(component.prepare(CONTACT_SAMPLE_IFORMCONTACT)))
      .toBe(JSON.stringify(CONTACT_SAMPLE_FORM_PAYLOAD));
  });

  it('should prepare payload for create call, even if there is an address 2', () => {
    expect(JSON.stringify(component.prepare(CONTACT_SAMPLE_IFORMCONTACT2)))
      .toBe(JSON.stringify(CONTACT_SAMPLE_FORM_PAYLOAD2));
  });

  it('should populate the state\'s autocomplete property', () => {
    const stateObject = component.formData.find(n => n.config.id === 'state');

    expect(stateObject.autocomplete.length).toBe(1);
    expect(stateObject.autocomplete).toEqual([ 'Michigan' ]);
  });

  describe('announcements, detestments and success', () => {
    const originalLog = console.log;
    const mockLog = jasmine.createSpy('mockLog');

    beforeEach(async(() => {
      console.log = mockLog;
    }));

    afterEach(async(() => {
      console.log = originalLog;
      mockLog.calls.reset();
    }));

    it('should log the right data when we make announcements', () => {
      component.announce();

      expect(mockLog.calls.count()).toBe(4);
      expect(mockLog.calls.argsFor(0)[0]).toBe('FORM VALID.');
      expect(mockLog.calls.argsFor(1)[0]).toBe(new FunTitleService().$ucce$$);
      expect(mockLog.calls.argsFor(2)[0]).toBe('DATA:');
      expect(mockLog.calls.argsFor(3)[0]).toBe(CONTACT_SAMPLE_EMPTY_SERIALIZATION);
    });

    it('should log the right data when we make detestments', () => {
      component.detest();

      expect(mockLog.calls.count()).toBe(1);
      expect(mockLog.calls.argsFor(0)[0]).toBe('Not Valid');
      expect(JSON.stringify(mockLog.calls.argsFor(0)[1]))
        .toBe(JSON.stringify(CONTACT_SAMPLE_EMPTY_DETESTMENT_ARRAY));
    });

    it('should NOT make announcement if the form is not valid (should detest)', () => {
      spyOn(component, 'formValid').and.returnValue(false);
      spyOn(component, 'announce');
      spyOn(component, 'detest');

      expect(component.isLoading).toBeFalsy();
      expect(component.announce).not.toHaveBeenCalled();
      expect(component.detest).not.toHaveBeenCalled();
      expect(component.formValid).not.toHaveBeenCalled();

      component.createContact();

      expect(component.isLoading).toBeTruthy();
      expect(component.formValid).toHaveBeenCalled();
      expect(component.announce).not.toHaveBeenCalled();
      expect(component.detest).toHaveBeenCalled();
    });

    it('should make announcement if the form is valid', () => {
      spyOn(component, 'formValid').and.returnValue(true);
      spyOn(component, 'announce');
      spyOn(component, 'detest');

      expect(component.isLoading).toBeFalsy();
      expect(component.announce).not.toHaveBeenCalled();
      expect(component.detest).not.toHaveBeenCalled();
      expect(component.formValid).not.toHaveBeenCalled();

      component.createContact();

      expect(component.isLoading).toBeTruthy();
      expect(component.formValid).toHaveBeenCalled();
      expect(component.announce).toHaveBeenCalled();
      expect(component.detest).not.toHaveBeenCalled();
    });

    it('should know when the form is valid', () => {
      component.formData = CONTACT_SAMPLE_FORM_DATA;
      expect(component.formValid()).toBeTruthy();

      component.formData[2].state = 'INVALID';

      expect(component.formValid()).toBeFalsy();
    });

  });
});
