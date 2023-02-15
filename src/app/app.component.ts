import { Component } from '@angular/core';
import { UserInformationsService } from './service/user-informations.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app';

  user_informations_data: any;
  constructor(private userInformationsData:UserInformationsService) {
    userInformationsData.user_informations_function().subscribe((data:any) => {
      console.warn("data", data)
      this.user_informations_data=data
    });
  }
}
