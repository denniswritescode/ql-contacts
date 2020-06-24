import { AfterContentInit, Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EmittableInputComponent } from 'src/app/shared/form/input/emittable-input/emittable-input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: [ './input-text.component.scss' ],
})
export class InputTextComponent extends EmittableInputComponent implements AfterContentInit {

  @Input() public autocomplete: string[];
  public autocompleteFilterOptions: Observable<string[]>;

  constructor() {
    super();
  }

  ngAfterContentInit() {
    // manipulation of 'con' needs to happen after ngOnInit...
    if (Array.isArray(this.autocomplete)) {
      this.autocompleteFilterOptions = this.con.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filterOptions(value))
        );
    }
  }

  private filterOptions(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autocomplete.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  format(type) {
    return this.config.format === type;
  }

  extendedValidation() {
    if (this.config.format === 'email') {
      this.validators.push(Validators.email);
    }

    if (this.config.format === 'phone') {
      this.validators = this.validators.concat([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]\d*$/),
      ]);
    }
  }
}
