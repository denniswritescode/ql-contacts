import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactsComponent } from './view/contacts/contacts.component';
import { ContactDetailsComponent } from './view/contacts/contact-details/contact-details.component';
import { ContactAddComponent } from './view/contacts/contact-add/contact-add.component';
import { ContactHeaderComponent } from './view/contacts/contact-header/contact-header.component';
import { ContactFormComponent } from './view/contacts/contact-form/contact-form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PhonePipe } from './pipes/phone.pipe';
import { ViewComponent } from './view/view.component';
import { InputTextComponent } from './shared/form/input-text/input-text.component';
import { InputEmailComponent } from './shared/form/input-email/input-email.component';
import { InputPhoneComponent } from './shared/form/input-phone/input-phone.component';
import { EmittableInputComponent } from './shared/form/input/emittable-input/emittable-input.component';

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
    EmittableInputComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
