import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-cell',
  templateUrl: './phone-cell.component.html',
  styleUrls: [ './phone-cell.component.scss' ],
})
export class PhoneCellComponent implements OnInit {
  @Input() public phone: string;

  constructor() { }

  ngOnInit(): void {
  }

}
