import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserInformationsService {

  url = "http://127.0.0.1:3000/user_informations"

  constructor(private  http:HttpClient ) { }
  
  user_informations_function(){
    return this.http.get(this.url)
  }
}
