import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  passwordForm!: FormGroup;
  existingpassword:any=[];
  updatedpassword:any=[];
  mypassword= localStorage.getItem('mypassword');

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      email : ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

    });
  }

  submitForm() {
    if (this.passwordForm.valid) {
      if (this.passwordForm.value.password === this.passwordForm.value.confirmPassword) {
        console.log('Passwords matched');
        this.existingpassword = localStorage.getItem('mypassword')
        if(!this.existingpassword){
          this.existingpassword =[];
        }else{
          this.existingpassword = JSON.parse(this.existingpassword);
        }

        this.existingpassword.push(this.passwordForm.value);

        this.updatedpassword = JSON.stringify(this.existingpassword)

        localStorage.setItem('mypassword',this.updatedpassword);

        // Here you can proceed with further actions (e.g., API call)
        this.router.navigate(['/contact']);
      } else {
        console.log('Passwords do not match');
        // Handle error accordingly
      }
    } else {
      console.log('Form is invalid');
      // Handle form validation errors
    }
  }
}
