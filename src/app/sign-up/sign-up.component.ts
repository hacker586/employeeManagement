import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  constructor(private fb: FormBuilder, private router: Router){
    this.signUpForm = this.createForm();
  }
  ngOnInit(): void {
    console.log(" I am signUp");
  }
  signUpForm : FormGroup;
  createForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required]],
      number: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      // Perform login logic here
      console.log('Form submitted!', this.signUpForm.value);
      this.router.navigate(['/home'])

    } else {
      // Form is invalid, show error or handle accordingly
      console.log('Form is invalid');
    }
    console.log("hahah")
  }
  toLoginPage(){
    this.router.navigate(['/login'])
  }


}
