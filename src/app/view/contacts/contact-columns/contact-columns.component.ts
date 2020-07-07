import { AfterViewInit, Component, Input, Optional, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { ITableColumnConfig } from 'src/app/interfaces/shared.interfaces';

@Component({
  selector: 'app-contact-columns',
  templateUrl: './contact-columns.component.html',
  styleUrls: [ './contact-columns.component.scss' ],
})
export class ContactColumnsComponent implements AfterViewInit {

  @Input() mobile: boolean;
  @Input() column: ITableColumnConfig;

  @ViewChild(MatColumnDef) columnDef: MatColumnDef;

  constructor(@Optional() public table: MatTable<any>) { }

  ngAfterViewInit() {
    if (this.table) {
      this.table.addColumnDef(this.columnDef);
    }
  }
}
