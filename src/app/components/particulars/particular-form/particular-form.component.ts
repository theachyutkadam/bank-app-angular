import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-particular-form',
  templateUrl: './particular-form.component.html',
  styleUrls: ['./particular-form.component.css']
})
export class ParticularFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeform()
  }

  initializeform(){

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.maxLength(50)]]
    })
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
