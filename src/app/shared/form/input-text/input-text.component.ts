import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
