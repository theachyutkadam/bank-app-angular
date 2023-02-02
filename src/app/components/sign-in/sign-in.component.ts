import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username = "achyut";
  password = "123456";
  onButtonClick(){
    console.log("Hello wordl");
  }
}
