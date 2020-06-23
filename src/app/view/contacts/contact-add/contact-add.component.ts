import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IViewportService } from 'src/app/interfaces/shared.interfaces';
import { ITOKENS } from 'src/app/shared/injection.tokens';

import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: [ './contact-add.component.scss' ],
})
export class ContactAddComponent {

  constructor(
    @Inject(ITOKENS.IViewportService) private viewport: IViewportService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) { }

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
