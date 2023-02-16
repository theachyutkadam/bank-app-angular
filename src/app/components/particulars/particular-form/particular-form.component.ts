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
  constructor(private _http: HttpServices, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeform()
  }

  initializeform(){
    this.myForm = this.fb.group({
      amount: ['', [Validators.required]],
      card_id: ['', [Validators.required]],
      sender_id: ['', [Validators.required]],
      receiver_id: ['', [Validators.required]]
    })
  }

  create(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    let particularObj = {
      'amount': form.value.amount,
      'card_id': form.value.card_id,
      'sender_id': form.value.sender_id,
      'receiver_id': form.value.receiver_id
    }

    this._http.postApi('particulars',particularObj).subscribe(
      (res:any) => {
        console.log('++++++++++++');
        console.warn('response:', res);
        console.log('++++++++++++');
      }
    )
  }
}
