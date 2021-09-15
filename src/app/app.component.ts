import {Component, OnInit} from '@angular/core';
import {contactsService} from "./contacts.service";
export interface User{
  name:string,
  phone:string,
  birthday?:string,
  email?:string,
  address?:string,
  id:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Contacts';
  search: string = '';


  constructor( public contacts: contactsService) {
  }

  ngOnInit() {
this.contacts.init()
  }
}
