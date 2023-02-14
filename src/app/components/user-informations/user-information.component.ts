import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  user_information = {
    title: 'User Information',
    first_name: 'Achyut',
    last_name: 'Kadam',
    content: 'This is the first learning page',
    image: 'assets/work_desk.jpg'
  };

  constructor() { }
}
