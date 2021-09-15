import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
showContent:Boolean=false
  form:FormGroup|any
  constructor() { }

  ngOnInit(): void {
this.form = new FormGroup({
  name : new FormControl('', [Validators.required,Validators.minLength(4)])
})
  }
submit(){

}
}
