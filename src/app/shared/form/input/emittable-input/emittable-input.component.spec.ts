import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';

import { EmittableInputComponent } from './emittable-input.component';

class ConcreteInputComponent extends EmittableInputComponent {
  constructor() {
    super();
  }

  extendedValidation() { }
}

describe('EmittableInputComponent', () => {
  let component: ConcreteInputComponent;

  beforeEach(() => {
    component = new ConcreteInputComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit values when they are changed', async(() => {
    const testValue = 'new value';
    const asyncTest = (value) => {
      expect(value).toBe(testValue);
    };

    component.valueChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(testValue);
  }));

  it('should respect validation rules: maxLength:VALID', async(() => {
    const validValue = '12345';

    const asyncTest = (state) => {
      expect(state).toBe('VALID');
    };

    component.config.validation = { maxLength: 5 };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(validValue);
  }));

  it('should respect validation rules: maxLength:INVALID', async(() => {
    const invalidValue = '123456';

    const asyncTest = (state) => {
      expect(state).toBe('INVALID');
    };

    component.config.validation = { maxLength: 5 };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(invalidValue);
  }));

  it('should respect validation rules: required:VALID', async(() => {
    const validValue = 'A';

    const asyncTest = (state) => {
      expect(state).toBe('VALID');
    };

    component.config.validation = { required: true };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(validValue);
  }));

  it('should respect validation rules: required:INVALID', async(() => {
    const invalidValue = '';

    const asyncTest = (state) => {
      expect(state).toBe('INVALID');
    };

    component.config.validation = { required: true };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(invalidValue);
  }));

  it('should respect config.validation rules: required:VALID', async(() => {
    const validValue = 'ABCDE';

    const asyncTest = (state) => {
      expect(state).toBe('VALID');
    };

    component.config.validation = { minLength: 5 };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(validValue);
  }));

  it('should respect validation rules: required:INVALID', async(() => {
    const invalidValue = 'ABC';

    const asyncTest = (state) => {
      expect(state).toBe('INVALID');
    };

    component.config.validation = { minLength: 5 };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(invalidValue);
  }));

  it('should respect validation rules: pattern:VALID', async(() => {
    const validValue = 'A';

    const asyncTest = (state) => {
      expect(state).toBe('VALID');
    };

    component.config.validation = { pattern: /[a-zA-Z]/ };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(validValue);
  }));

  it('should respect validation rules: pattern:INVALID', async(() => {
    const invalidValue = '9';

    const asyncTest = (state) => {
      expect(state).toBe('INVALID');
    };

    component.config.validation = { pattern: /[a-zA-Z]/ };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(invalidValue);
  }));

  it('should respect validation rules: numbersOnly:VALID', async(() => {
    const validValue = '9';

    const asyncTest = (state) => {
      expect(state).toBe('VALID');
    };

    component.config.validation = { numbersOnly: true };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(validValue);
  }));

  it('should respect validation rules: numbersOnly:INVALID', async(() => {
    const invalidValue = 'A';

    const asyncTest = (state) => {
      expect(state).toBe('INVALID');
    };

    component.config.validation = { numbersOnly: true };
    component.stateChange.subscribe(asyncTest);
    component.ngOnInit();

    component.con.setValue(invalidValue);
  }));
});
