import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhonePipe } from './pipes/phone.pipe';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';
import { ContactHeaderComponent } from './contacts/contact-header/contact-header.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    PhonePipe,
    ContactDetailsComponent,
    ContactAddComponent,
    ContactHeaderComponent,
    ContactFormComponent,
  ],
  entryComponents: [
    ContactFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
