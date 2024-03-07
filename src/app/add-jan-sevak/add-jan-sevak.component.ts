import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-jan-sevak',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-jan-sevak.component.html',
  styleUrl: './add-jan-sevak.component.css'
})
export class AddJanSevakComponent {
  janSevakArr = JSON.parse((localStorage.getItem("newJansevak") || '[]'));

  AddJansevakForm: FormGroup;
  constructor(private fb :FormBuilder){
    this.AddJansevakForm = this.createForm();
  }
  createForm(): FormGroup{
    return this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      gender: ['', Validators.required],
      address:['', Validators.required],
      aadhaar:['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      voterId:['', [Validators.required, Validators.minLength(11), Validators.maxLength(12)]],
    })
  }
  onSubmit(){
    console.log(this.AddJansevakForm.value);
    this.janSevakArr.push(this.AddJansevakForm.value)
    console.log(this.janSevakArr);
    localStorage.setItem("newJansevak", JSON.stringify( this.janSevakArr));
    this.AddJansevakForm.patchValue({
      name:"",
      email:"",
      gender:"",
      address: "",
      aadhaar: "",
      voterId: "",
    })
  }

}
