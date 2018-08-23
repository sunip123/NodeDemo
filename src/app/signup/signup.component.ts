import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  signup(event){
    event.preventDefault()
    const target = event.target;
    const name = target.querySelector('#name').value
    const phone = target.querySelector('#phone').value
    console.log(name, phone);
  }
}
