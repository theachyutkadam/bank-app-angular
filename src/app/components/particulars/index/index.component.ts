import { Component } from '@angular/core';
import { HttpServices } from 'src/app/connections/service/http-services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  particulars: any;

  constructor(private _http: HttpServices) { }
  ngOnInit() {
    // Particulars API Call
    this.getParticulars()
  }

  getParticulars() {
    this._http.get('particulars')
    .subscribe(
      (response: any) => {
        console.warn("##############")
        console.warn("response", response)
        console.warn("##############")
        this.particulars = response
      },
      err => {
        console.log(err);
      }
    )
  }
}
