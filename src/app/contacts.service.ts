import {Injectable} from "@angular/core";
import {User} from "./app.component";
import {BehaviorSubject} from "rxjs";

@Injectable()

export class contactsService {
  subject = new BehaviorSubject<any[]>([]);
  users: any
  usersInit: User[] = [{
    name: 'Nazar Yast',
    phone: '+380634785806',
    birthday: '12.09.1998',
    email: 'email@gmail.com',
    address: 'lviv',
    id:1
  },
    {
      name: 'Anton Davidov',
      phone: '+380734780006',
      birthday: '20.04.1995',
      email: 'anton@gmail.com',
      address: 'odessa',
      id:2
    },
    {
      name: 'Olga Kostiv',
      phone: '+380934000880',
      birthday: '1.10.2000',
      email: 'email3@gmail.com',
      address: 'lviv',
      id:3
    },]

  init():void {
    if (!localStorage.users) {
      localStorage.setItem('users', JSON.stringify(this.usersInit))
    }
    this.subject.next(JSON.parse(localStorage.users))
    this.subject.subscribe((el) => {
      this.users = el
    })
  }

  addUser(createdUser: any): void {
    this.subject.next([...this.subject.value, createdUser])
    localStorage.setItem('users', JSON.stringify(this.users))
  }
}
