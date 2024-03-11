import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NgOtpInputModule } from  'ng-otp-input';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-about',
  standalone: true,
  imports:[CommonModule, NgOtpInputModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  otp: string = '';
  otpInput: string = '';
  timerMessage: string = '';
  newotp:string = String(JSON.parse(localStorage.getItem('notp') || ""));

  constructor(private contactcomponent: ContactComponent,private router: Router){}

  ngOnInit(): void {
    
  }

  submitOTP() {
    // console.log("Entered OTP:", this.otp);
    // this.otpValidation(this.otp);
    // this.newotp.tostring()
    console.log("entered",this.otp);
    console.log("local",this.newotp);
    console.log(typeof(this.newotp))
    if(this.otp === this.newotp){
      console.log('correct otp entered')
      alert('Entered Otp is correct')
      this.router.navigate(['/profile'])
      
    }
    else{
      console.log("Error! Entered otp is incorrect")
      alert('Entered otp is wrong')
    }

  }

  onOtpChange(otp: string){
    this.otp = otp;
    console.log(this.otp);
  }

  // otpValidation(): void {
  //   if (enteredOTP === this.newotp) {
  //     console.log("OTP is correct!");

  //   } else {
  //     console.log("Incorrect OTP. Please try again.");
      
  //   }
  // }
}

export class AboutModule { }
