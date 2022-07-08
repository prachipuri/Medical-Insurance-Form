import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  medicalForm:any;

  ngOnInit(){

    this.medicalForm=new FormGroup({
      firstName: new FormControl('',[Validators.pattern("[A-Za-z]{1,32}"),Validators.required]),
      middlename: new FormControl(''),
      last: new FormControl('',[Validators.pattern("[A-Za-z]{1,32}"),Validators.required]),
      Dob: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required, Validators.pattern("[0-9]{0,2}")]),
      gender: new FormControl('',[Validators.required]),
      relationship: new FormControl('',[Validators.pattern("[A-Za-z]{1,32}"),Validators.required]),
      premium: new FormControl('',[Validators.required, Validators.pattern("[0-9]{0,2}")]),
      date: new FormControl('',[Validators.required])
    });
  }
  

}