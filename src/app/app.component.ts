import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { HttpServices } from 'src/app/connections/service/http-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http: HttpServices) { }
  ngOnInit() {
    // Particulars API Call
    // this.logout()
  }

  logout() {
    this._http.get('users/logout')
    .subscribe(
      (response: any) => {
        console.warn("###logout###########")
        console.warn("logout", response)
        console.warn("###logout###########")
        response
      },
      err => {
        console.log(err);
      }
    )
  }

}
