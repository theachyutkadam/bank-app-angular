import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { api_base_url, api_token, user_token } from '../api-config';

@Injectable({
  providedIn: 'root'
})

export class HttpServices {
  constructor(private _http: HttpClient) { }

  httpHeader = new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'application/json'
  })

  httpHeaderWithToken = new HttpHeaders({
    'Accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': `Bearer ${user_token}`,
  })

  get(url: any): Observable<any>{
    return this._http.get(`${api_base_url}${url}`)
  }

  postApi(url: any, obj: any){
    return this._http.post(`${api_base_url}${url}`, obj)
  }

}
