import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../app.component";
import {contactsService} from "../../contacts.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
showContent:Boolean=false
  form:FormGroup|any
  constructor(private contacts:contactsService) { }

  ngOnInit(): void {
this.form = new FormGroup({
  name : new FormControl('', [Validators.required,Validators.minLength(4)]),
  phone : new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern("[+()0-9 ]{13}")]),
  birthday : new FormControl(''),
  email : new FormControl('', [Validators.email]),
  address : new FormControl('', [Validators.minLength(4)]),
})
  }
submit(){
const newContact:User ={
  name:this.form.value.name,
  phone:this.form.value.phone,
  birthday:this.form.value.birthday,
  email:this.form.value.email,
  address:this.form.value.address,
  id: this.contacts.users[this.contacts.users.length-1].id + 1
}
  this.showContent=false
  this.contacts.addUser(newContact)

}
}
