import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn : 'root'
})
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  selectedButton: number | null = null;

  constructor(private router:Router){ }
  
  selectButton(buttonNumber: number): void {
    this.selectedButton = buttonNumber;
  }
  
  isSelected(buttonNumber: number): boolean {
    return this.selectedButton === buttonNumber;
  }

  ngOnInit(): void {
    
  }

  
  email: string = '';
  
  otp: any;
  timerMessage: string = '';

  // sendEmail() {
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#emailForm')
  //     .then((response: EmailJSResponseStatus) => {
  //       console.log('Email sent successfully', response);
  //       // Optionally clear the form
  //       this.clearForm();
  //       alert('Email sent successfully!');
  //     }, (error) => {
  //       console.error('Email send error:', error);
  //       alert('Failed to send email. Please try again later.');
  //     });
  // }
  clearForm() {
    this.email = '';
    
  }

  startTimer() {
    let timeLeft = 60;
    const timer = setInterval(() => {
      this.timerMessage = `Time left: ${timeLeft} seconds`;
      timeLeft -= 1;
      if (timeLeft < 0) {
        clearInterval(timer);
        this.timerMessage = "Time's up!";
      }
    }, 1000);
  }

  generateOTP() {
    // Generate a random 6-digit OTP
    this.otp = Math.floor(100000 + Math.random() * 900000);
    alert("Your OTP is: " + this.otp);
    this.startTimer();
    localStorage.setItem('notp', JSON.stringify(this.otp))
    return this.otp;

  }
  
  getOtp(): string {
    return this.otp;
    
  }


  loginUsingPassword() {
    // Implement your logic for login using password here
    this.router.navigate(['/profile']);

};

loginUsingEmail(){
  this.router.navigate(['/login']);
};

}

@NgModule({
  declarations: [ContactComponent],
  imports: [Component,NgModel,FormGroup,FormsModule,NgForm, RouterLink,RouterModule,Router],
  exports: [ContactComponent]
})
export class ContactModule { }
