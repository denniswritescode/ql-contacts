import { AfterViewInit, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EmittableInputComponent } from 'src/app/shared/form/input/emittable-input/emittable-input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: [ './input-text.component.scss' ],
})
export class InputTextComponent extends EmittableInputComponent implements AfterViewInit {

  @Input() public autocomplete: string[];
  public autocompleteFilterOptions: Observable<string[]>;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    this.autocompleteFilterOptions = this.con.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autocomplete.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  extendedValidation() { }
}
