import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { UserInformations } from 'src/app/models/user-informations';

@Injectable({
  providedIn: 'root'
})
export class UserInformationsApiService {

  private baseURL = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {
    console.log("++++++++++++")
    console.log("++++++++++++")
    debugger
    console.log("++++++++++++")
    console.log("++++++++++++")
  }

  getRandomUsers(): Observable<UserInformations> {
    const URL = '${this.baseURL}/user_informations';
    return this.http.get<UserInformations>(URL);
  }
}
