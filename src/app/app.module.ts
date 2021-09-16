import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './Components/user/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from './Pipes/filter.pipe';
import {CreateComponent} from './Components/create/create.component';
import {contactsService} from "./contacts.service";
import {InnerUserComponent} from './Components/inner-user/inner-user.component';
import {AppRoutingModule} from "./app-routing.module";
import {EditUserComponent} from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FilterPipe,
    CreateComponent,
    InnerUserComponent,
    EditUserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [contactsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
