import {Component, OnInit} from '@angular/core';
export interface User{
  name:string,
  phone:string,
  birthday?:string,
  email?:string,
  address?:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Contacts';
  search:string='';
  users:User[]=[]
  usersInit:User[]= [{
    name:'Anton Davidov',
    phone:'0634785886',
    birthday:'12.09.1998',
    email:'email@gmail.com',
    address: 'lviv'
  },
  {
    name:'Anton Davidov2',
    phone:'0734785886',
    birthday:'12.09.1998',
    email:'email2@gmail.com',
    address: 'lviv'
  },
  {
   name:'Anton Davidov3',
    phone:'0934785886',
    birthday:'12.09.1998',
    email:'email3@gmail.com',
    address: 'lviv'
  },]


 ngOnInit() {
    if(!localStorage.users){
localStorage.setItem('users',JSON.stringify(this.usersInit))
    }
   console.log(localStorage.users)
   this.users = JSON.parse(localStorage.users)
 }
}
