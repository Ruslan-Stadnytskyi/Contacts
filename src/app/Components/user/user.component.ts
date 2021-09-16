import {Component, OnInit} from '@angular/core';
import {contactsService} from "../../contacts.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title = 'Contacts';
  search: string = '';

  constructor(public contacts: contactsService) {
  }

  ngOnInit(): void {
    this.contacts.init()
  }

}
