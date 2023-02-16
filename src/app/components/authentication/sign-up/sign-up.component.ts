import { Component } from '@angular/core';
import { HttpServices } from 'src/app/connections/service/http-services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user_informations_data: any;

  constructor(private _http: HttpServices) {
    // userInformationsData.user_informations_function().subscribe((data: any) => {
    //   console.warn("data", data)
    //   this.user_informations_data = data
    // });

  }
  // ngOnInit() {
  //   // SignUp API Call
  //   this.signUp()
  // }

}
