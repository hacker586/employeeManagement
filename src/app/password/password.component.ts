import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-password',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  constructor(private fb: FormBuilder, private router: Router){
    this.passwordForm = this.createForm();
  }
  passwordForm: FormGroup;
  createForm(): FormGroup{
    return this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.passwordForm.valid) {
      // Perform login logic here
      console.log('Form submitted!', this.passwordForm.value);
      this.router.navigate(['/signUp'])

    } else {
      // Form is invalid, show error or handle accordingly
      console.log('Form is invalid');
    }
    console.log("hahah")
  }
}
