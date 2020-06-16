import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhonePipe } from './pipes/phone.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { InputEmailComponent } from './shared/form/input-email/input-email.component';
import { InputPhoneComponent } from './shared/form/input-phone/input-phone.component';
import { InputTextComponent } from './shared/form/input-text/input-text.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactAddComponent } from './view/contacts/contact-add/contact-add.component';
import { ContactDetailsComponent } from './view/contacts/contact-details/contact-details.component';
import { ContactFormComponent } from './view/contacts/contact-form/contact-form.component';
import { ContactHeaderComponent } from './view/contacts/contact-header/contact-header.component';
import { ContactsComponent } from './view/contacts/contacts.component';
import { ViewComponent } from './view/view.component';
import { DetailItemComponent } from './view/contacts/contact-details/detail-item/detail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    PhonePipe,
    ContactDetailsComponent,
    ContactAddComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    InputTextComponent,
    InputEmailComponent,
    InputPhoneComponent,
    DetailItemComponent,
  ],
  entryComponents: [
    ContactFormComponent,
    InputPhoneComponent,
    InputTextComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
