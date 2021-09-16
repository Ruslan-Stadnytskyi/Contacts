import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {contactsService} from "../contacts.service";
import {User} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() user: any
  form: FormGroup | any

  constructor(private contacts: contactsService, private router: Router) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern("[+()0-9 ]{13}")]),
      birthday: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      address: new FormControl('', [Validators.minLength(4)]),
    })
  }

  submit():void {
    const editedUser: User = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      birthday: this.form.value.birthday,
      email: this.form.value.email,
      address: this.form.value.address,
      id: this.user.id
    }
    this.contacts.editUser(editedUser)
    this.router.navigate([''])
  }
}
