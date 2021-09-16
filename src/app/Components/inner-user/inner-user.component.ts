import {Component, OnInit} from '@angular/core';
import {contactsService} from "../../contacts.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-inner-user',
  templateUrl: './inner-user.component.html',
  styleUrls: ['./inner-user.component.scss']
})
export class InnerUserComponent implements OnInit {
  user: any
  showEdit: boolean = false

  constructor(public contacts: contactsService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit():void {
    this.route.params.subscribe((params: Params) => {
      this.user =
        this.contacts.users.find((p: { id: number }) => p.id === +params.id)
    })
  }

  toHomePage():void {
    this.router.navigate([''])
  }

  edit():void {
    this.showEdit = !this.showEdit
  }

  delete():void {
    this.contacts.deleteUser(this.user.id)
    this.router.navigate([''])
  }
}
