import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  onButtonClick(){
    // alert("Welcome! " + this.username + " " + this.password);
    // console.log(this.username);
    // console.log(this.password);
  }
}
