import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: [ './detail-item.component.scss' ],
})
export class DetailItemComponent {

  @Input() icon: string;
  @Input() label: string;
  @Input() value: string;

  constructor() { }
}
