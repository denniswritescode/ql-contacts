import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-header',
  templateUrl: './name-header.component.html',
  styleUrls: [ './name-header.component.scss' ],
})
export class NameHeaderComponent implements OnInit {
  @Input() public mobile: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
