
import { Router,RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
    loginForm!: FormGroup;
    mypassword =JSON.parse( localStorage.getItem('mypassword')|| '[]');
    myPasswordArr: any[] = [];
    e: any;
  
  
    constructor(private formBuilder: FormBuilder, private router:Router) { }
  
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(2)]]
      });
    }
    // checkEmail(): boolean{
    //   var index = this.mypassword[0].name;
    //   console.log(index);
    //   return true;
    // }
    userCheck(): boolean {
      let found = this.mypassword.some((e: { email: any; password: any; }) => 
        e.email === this.loginForm.value.email && e.password === this.loginForm.value.password);
      return found;
    }
    onSubmit() {
      // console.log(this.loginForm.valid);
      // console.log(this.mypassword)
      // console.log(this.mypassword[0]?.email?.includes(this.loginForm.value.email))
      if(this.loginForm.valid && this.userCheck()) {
        // console.log('Form submitted:', this.loginForm.value);
        console.log(this.mypassword)
        alert('form submitted')
        this.router.navigate(['/contact'])


        // Here you can add logic to send the form data to a server or perform other actions
      } else {
        console.log('Form is invalid. Please fill in all fields correctly.');
      }
    }
  }
  

