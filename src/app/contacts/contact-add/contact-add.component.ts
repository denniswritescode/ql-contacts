import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent {

  constructor(public dialog: MatDialog) { }

  openContactForm() {
    const dialogRef = this.dialog.open(ContactFormComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
