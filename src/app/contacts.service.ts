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
    birthday: '1998.12.09',
    email: 'email@gmail.com',
    address: 'lviv',
    id: 0
  },
    {
      name: 'Anton Davidov',
      phone: '+380734780006',
      birthday: '1995.04.20',
      email: 'anton@gmail.com',
      address: 'odessa',
      id: 1
    },
    {
      name: 'Olga Kostiv',
      phone: '+380934000880',
      birthday: '2000.1.10',
      email: 'email3@gmail.com',
      address: 'lviv',
      id: 2
    },]

  init(): void {
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

  editUser(editedUser: any): void {
    this.users.forEach((el: any) => {
      if (el.id === editedUser.id) this.users[el] = editedUser
    })
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  deleteUser(id: number):void {
    let idx = 0
    this.users.forEach((el: any) => {
      if (el.id === id) idx = this.users.indexOf(el)
    })
    this.users.splice(idx, 1)
    localStorage.setItem('users', JSON.stringify(this.users))
  }

}
