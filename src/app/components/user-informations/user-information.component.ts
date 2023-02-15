import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserInformationsService } from '../../service/user-informations.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  // user_information = {
  //   title: 'User Information',
  //   first_name: 'Achyut',
  //   last_name: 'Kadam',
  //   content: 'This is the first learning page',
  //   image: 'assets/work_desk.jpg'
  // };

  user_informations_data: any;
  data: string = "hello"

  constructor(private userInformationsData: UserInformationsService) {

    userInformationsData.user_informations_function().subscribe((data: any) => {
      console.warn("data", data)
      this.user_informations_data = data
    });

    console.log(this.data);
  }

}
