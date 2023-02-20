import { Component } from '@angular/core';
import { HttpServices } from 'src/app/connections/service/http-services';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin = false;
  constructor(private _http: HttpServices, private router:Router) {
    if (sessionStorage.getItem('authToken')) {
      this.isLogin = true
    }
  }
  ngOnInit() {
  }

  simpleAlert(){
    Swal.fire('Logout Successfully!');
  }

  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }

  logout() {
    this._http.get('users/logout')
    .subscribe(
      (response: any) => {
        sessionStorage.clear();
        console.warn("logout", response)
        response
        this.simpleAlert();
        this.router.navigate(['/']);
        this.isLogin = false
      },
      err => {
        console.log(err);
      }
    )
  }

}
