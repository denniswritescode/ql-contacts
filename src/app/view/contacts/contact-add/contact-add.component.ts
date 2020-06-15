import { BreakpointService, ViewportService } from 'src/app/services/viewport/viewport.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss'],
  providers: [
    { provide: BreakpointService, useClass: ViewportService }
  ]
})
export class ContactAddComponent implements OnInit {

  constructor(
    private viewport: BreakpointService,
    public dialog: MatDialog,
  ) {
    this.openContactForm();
  }

  ngOnInit() {}

  openContactForm() {
    const dialogRef = this.dialog.open(
      ContactFormComponent,
      {
        width: this.viewport.mobile() ? '80vw' : '60vw'
      }
    );
  }
}
