import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './Pipes/filter.pipe';
import { CreateComponent } from './Components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FilterPipe,
    CreateComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
