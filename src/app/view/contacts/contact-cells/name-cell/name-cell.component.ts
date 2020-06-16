import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/interfaces/shared.interfaces';

@Component({
  selector: 'app-name-cell',
  templateUrl: './name-cell.component.html',
  styleUrls: [ './name-cell.component.scss' ],
})
export class NameCellComponent implements OnInit {
  @Input() public mobile: boolean;
  @Input() public contact: IContact;

  constructor() { }

  ngOnInit(): void {
  }

}
