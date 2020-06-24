import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent } from 'ng2-mock-component';
import { skip } from 'rxjs/operators';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputTextComponent,
        MockComponent({ selector: 'mat-hint' }),
      ],
      imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  describe('with autocomplete', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(InputTextComponent);
      component = fixture.componentInstance;
      component.autocomplete = [ 'One', 'Two', 'Three' ];
      fixture.detectChanges();
    });

    it('should create instance', () => {
      expect(component).toBeTruthy();
    });

    it('should should not filter autocomplete options when the present value of the user input is an empty string',
      async(() => {
        const checkFilteredOptions = (options: string[]) => {
          expect(options.length).toBe(3); // 'One', 'Two', and 'Three'
        };

        component.autocompleteFilterOptions
          .subscribe(checkFilteredOptions);
      })
    );

    it('should filter autocomplete options when the present value of the user input is non-empty',
      async(() => {
        const checkFilteredOptions = (options: string[]) => {
          expect(options.length).toBe(2); // 'Two', 'Three'
          expect(options.includes('One')).toBeFalsy();
        };

        component.autocompleteFilterOptions
          .pipe(skip(1))
          .subscribe(checkFilteredOptions);

        // should filter options to 'Two' and 'Three'
        component.con.setValue('t');
      })
    );
  });

  describe('without autocomplete', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(InputTextComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create instance', () => {
      expect(component).toBeTruthy();
    });

    it('should not define autocompleteFilterOptions', () => {
      expect(component.autocompleteFilterOptions).toBeUndefined();
    });
  });

  describe('phone validation', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(InputTextComponent);
      component = fixture.componentInstance;
      component.config.format = 'phone';
      fixture.detectChanges();
    });

    it('should should detect the phone format and recognize invalid input',
      async(() => {
        const invalidValue = '123'; // should be 10 digits
        const invalidTest = (state) => {
          expect(state).toBe('INVALID');
        };

        component.con.statusChanges.subscribe(invalidTest);
        component.con.setValue(invalidValue);
      })
    );

    it('should should detect the phone format and recognize valid input',
      async(() => {
        const validValue = '3135551212';
        const validTest = (state) => {
          expect(state).toBe('VALID');
        };

        component.con.statusChanges.subscribe(validTest);
        component.con.setValue(validValue);
      })
    );
  });

  describe('email validation', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(InputTextComponent);
      component = fixture.componentInstance;
      component.config.format = 'email';
      fixture.detectChanges();
    });

    it('should should detect the email format and recognize invalid input',
      async(() => {
        const invalidValue = 'john@'; // should be 10 digits
        const invalidTest = (state) => {
          expect(state).toBe('INVALID');
        };

        component.con.statusChanges.subscribe(invalidTest);
        component.con.setValue(invalidValue);
      })
    );

    it('should should detect the email format and recognize valid input',
      async(() => {
        const validValue = 'john@john.com'; // should be 10 digits
        const validTest = (state) => {
          expect(state).toBe('VALID');
        };

        component.con.statusChanges.subscribe(validTest);
        component.con.setValue(validValue);
      })
    );
  });
});
