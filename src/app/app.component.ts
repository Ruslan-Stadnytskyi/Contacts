import {Component} from '@angular/core';

export interface User {
  name: string,
  phone: string,
  birthday?: string,
  email?: string,
  address?: string,
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
  }

}
