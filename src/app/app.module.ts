import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    PageNotFoundComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
