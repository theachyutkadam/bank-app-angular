import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
// import { UserInformationsService } from 'src/app/connections/service/user-informations.service';
import { HttpServices } from 'src/app/connections/service/http-services';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  user_informations: any;

  constructor(private _http: HttpServices) { }
  ngOnInit() {
    // user_informations API Call
    this.getUserInformations()
  }

  getUserInformations() {
    this._http.get('user_informations')
    .subscribe(
      (response: any) => {
        console.warn("##############")
        console.warn("response", response)
        console.warn("##############")
        this.user_informations = response
      },
      err => {
        console.log(err);
      }
    )
  }

}
