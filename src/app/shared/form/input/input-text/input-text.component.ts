import { AfterContentInit, Component, Input } from '@angular/core';
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
    if (Array.isArray(this.autocomplete)) {
      this.autocompleteFilterOptions = this.con.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
  }

  private _filter(value: string): string[] {
    if (Array.isArray(this.autocomplete)) {
      const filterValue = value.toLowerCase();

      return this.autocomplete.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
  }

  extendedValidation() { }
}
