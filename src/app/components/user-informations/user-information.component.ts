import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserInformationsService } from 'src/app/connections/service/user-informations.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  user_informations_data: any;


  constructor(private userInformationsData: UserInformationsService) {
    userInformationsData.user_informations_function().subscribe((data: any) => {
      console.log("****************");
      console.log(sessionStorage.getItem('userToken'));
      console.log("****************");
      console.warn("data", data)
      this.user_informations_data = data
    });

  }

}
