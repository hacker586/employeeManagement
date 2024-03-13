import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { validateHeaderValue } from 'node:http';
// import Tooltip from 'bootstrap/js/dist/tooltip';
import {Tooltip} from 'bootstrap';
@Component({
  selector: 'app-add-jan-sevak',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-jan-sevak.component.html',
  styleUrl: './add-jan-sevak.component.css'
})
export class AddJanSevakComponent implements OnInit{
  jansevakArr = JSON.parse((localStorage.getItem("JansevakArr") || '[]'));
  
  AddJansevakForm: FormGroup;
  constructor(private fb :FormBuilder,private renderer: Renderer2){
    this.AddJansevakForm = this.createForm();
  }
  createForm(): FormGroup{
    return this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required,Validators.pattern(/^[\w-]+(\.[\w-]+)*@(gmail\.com|outlook\.com)$/)]],
      age:['', Validators.required,Validators.pattern("[0-9 ]{2}")],
      gender: ['', Validators.required],
      address:['', Validators.required],
      aadhaar:['', [Validators.required,Validators.pattern("[0-9 ]{12}")]],
      voterId:['', [Validators.required,Validators.pattern(/^[A-Z]{3}\d{7}$/)]],
      mobileNo:["", [Validators.required, Validators.required,Validators.pattern("[0-9 ]{10}")]]
    })
  }

  ngOnInit(): void {
    
  }
  
  onSubmit(){
    // console.log(this.AddJansevakForm.value);
    this.jansevakArr.push(this.AddJansevakForm.value)
    console.log(this.jansevakArr);
    localStorage.setItem("JansevakArr", JSON.stringify( this.jansevakArr));
    this.AddJansevakForm.patchValue({
      name:"",
      email:"",
      age:"",
      gender:"",
      address: "",
      aadhaar: "",
      voterId: "",
      mobileNo:"",
    })
  }

}
