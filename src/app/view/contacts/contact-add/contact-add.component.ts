import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreakpointService, ViewportService } from 'src/app/services/viewport/viewport.service';

import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: [ './contact-add.component.scss' ],
  providers: [
    { provide: BreakpointService, useClass: ViewportService },
  ],
})
export class ContactAddComponent implements OnInit {

  constructor(
    private viewport: BreakpointService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) { }

  ngOnInit() { }

  openContactForm() {
    const dialogRef = this.dialog.open(
      ContactFormComponent,
      {
        width: this.viewport.mobile() ? '80vw' : '50vw',
        height: '80vh',
      }
    );

    dialogRef.afterClosed()
      .subscribe(this.showSuccessSnackBar.bind(this));
  }

  showSuccessSnackBar(result) {
    if (result === 'success') {
      this.snack.open(
        'Contact created!',
        'close',
        { duration: 3000 },
      );
    }
  }
}
