import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
// import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports:[RouterOutlet, CommonModule, ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) { 
    this.loginForm = this.createForm();
  }
  loginForm: FormGroup;
  createForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    console.log("I am loaded");
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic here
      console.log('Form submitted!', this.loginForm.value);
      this.router.navigate(['/home'])

    } else {
      // Form is invalid, show error or handle accordingly
      console.log('Form is invalid');
    }
    console.log("hahah")
  }
  toSignUpPage(){
    this.router.navigate(['/signUp'])
  }
  toPasswordPage(){
    this.router.navigate(['/password'])
  }
}
