import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServices } from 'src/app/connections/service/http-services';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private _http: HttpServices, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeform()
  }

  initializeform(){
    this.myForm = this.fb.group({
      email: ['admin@gmail.com', [Validators.required]],
      password: ['123456', [Validators.required]]
    })
  }


  login(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    let login_credentials = {
      'email': form.value.email,
      'password': form.value.password
    }

    this._http.postApi('users/login',login_credentials).subscribe(
      (response:any) => {
        if(response['status'] && response['status'] !== 200){
          console.log('xxxxxxxxxxerror');
          console.warn('error:', response);
        }
        else{
          console.log('------true');
          console.warn('response:', response);
          sessionStorage.clear();
          sessionStorage.setItem('authToken', response['auth_token']);
          sessionStorage.setItem('userInformationId', response['user_information_id']);
        }
      }
    )
  }
}
