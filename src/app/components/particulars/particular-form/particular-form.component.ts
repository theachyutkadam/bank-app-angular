import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServices } from 'src/app/connections/service/http-services';

@Component({
  selector: 'app-particular-form',
  templateUrl: './particular-form.component.html',
  styleUrls: ['./particular-form.component.css']
})
export class ParticularFormComponent implements OnInit {
  myForm!: FormGroup;
  cards: any;
  receivers: any;
  title = "sample"
  constructor(private _http: HttpServices, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeform()
  }

  initializeform(){
    this.get_cards()
    this.get_receiver()
    this.myForm = this.fb.group({
      amount: ['', [Validators.required]],
      card_id: ['', [Validators.required]],
      receiver_id: ['', [Validators.required]]
    })
  }

  get_cards() {
    this._http.get('cards').subscribe(
      (response: any) => {
        console.warn("cards", response)
        console.warn("##############")
        this.cards = response
      },
      err => {
        console.log(err);
      }
    )
  }

  get_receiver() {
    this._http.get('user_informations').subscribe(
      (response: any) => {
        console.warn("##############")
        console.warn("user_informations", response)
        console.warn("##############")
        this.receivers = response
      },
      err => {
        console.log(err);
      }
    )
  }

  create(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    let particularObj = {
      'amount': form.value.amount,
      'card_id': form.value.card_id,
      'sender_id': sessionStorage.getItem('userInformationId'),
      'receiver_id': form.value.receiver_id
    }

    this._http.postApi('particulars',particularObj).subscribe(
      (response:any) => {
        console.log('++++++++++++');
        console.warn('response:', response);
        console.log('++++++++++++');
      }
    )
  }
}
