import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule, JsonPipe } from '@angular/common';
@Component({
  selector: 'app-add-notification',
  standalone: true,
  imports: [CommonModule,NgxDatatableModule],
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  userProfileData: any[] = Object.values( JSON.parse(localStorage.getItem("userProfileData")|| "[]")); 
  // newJoinees: any[] = Object.values( JSON.parse(localStorage.getItem("userProfileData")|| "[]"));
  // newJoineesArr: any[] = Object.values(this.newJoinees);
  newJoineesColumns: any[] = [];
  newjoineesFamilyArr = [];
  newJoineesFamilyColumn: any[] = [];
  rejected: any[] = [];
  // rejectedArr: any[] = [];
  rejectedColumns: any[] = [];

@ViewChild('familyButton', {static: true})
familyButton!: TemplateRef<any>;
@ViewChild('acceptButton', {static: true})
acceptButton!: TemplateRef<any>;
@ViewChild('declineButton', {static: true})
declineButton!: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
    this.userProfileData = Object.values( JSON.parse(localStorage.getItem("userProfileData")|| "[]"));
    console.log("i AM here", this.userProfileData)
    // this.newJoinees = JSON.parse(localStorage.getItem('newJoinees') || '[]');
    // this.newJoineesArr = Object.values(this.newJoinees);
    this.rejected = (JSON.parse(localStorage.getItem("rejected")|| "[]"));
    console.log("I am rejected",this.rejected);
    // this.rejectedArr = Object.values(this.rejected);
    this.newJoineesColumns = [
      {
        prop: 'profilePhoto',
        name: 'profilePhoto'
      },
      {
        prop: 'profileAadharNum',
        name: 'Aadhaar'
      },
      {
        prop: 'profileCreateTime',
        name: 'Profile created on'
      },
      {
        prop: 'profileEmailAdd',
        name: 'Email Id'
      },
      {
        prop: 'profileFullName',
        name: 'Name'
      },
      {
        prop: 'profileGender',
        name: 'Gender'
      },
      {
        prop: 'profileMobNumber',
        name: 'Number'
      },
      {
        prop: 'profilePinCode',
        name: 'Pincode'
      },
      {
        prop: 'profileVoterId',
        name: 'VoterId'
      },
      {
        name: "Family Details",
        cellTemplate: this.familyButton
      },
      {
        // prop: 'accept',
        name: 'Accept',
        cellTemplate: this.acceptButton
      },
      {
        // prop: 'decline',
        name: 'Decline',
        cellTemplate: this.declineButton
      }
    ];
    this.rejectedColumns = [
      {
        prop: 'profilePhoto',
        name: 'profilePhoto'
      },
      {
        prop: 'profileAadharNum',
        name: 'Aadhaar'
      },
      {
        prop: 'profileCreateTime',
        name: 'Profile created on'
      },
      {
        prop: 'profileEmailAdd',
        name: 'Email Id'
      },
      {
        prop: 'profileFullName',
        name: 'Name'
      },
      {
        prop: 'profileGender',
        name: 'Gender'
      },
      {
        prop: 'profileMobNumber',
        name: 'Number'
      },
      {
        prop: 'profilePinCode',
        name: 'Pincode'
      },
      {
        prop: 'profileVoterId',
        name: 'VoterId'
      },
      {
        // prop: 'decline',
        name: 'Decline',
        cellTemplate: this.declineButton
      }
    ];
  }
  onAccept(){
    
    
  }
  onDecline(row: any){
    console.log("haha",row);
    // this.rejected.push(this.newJoinees.filter((e)=>e.profileAadharNum==row.profileAadharNum));
    this.rejected.push(row);
    // this.rejectedArr.push(Object.values(this.rejected));
    localStorage.setItem("rejected", JSON.stringify( this.rejected))
    this.userProfileData = Object.values(this.userProfileData).filter((e)=>e.profileAadharNum!=row.profileAadharNum);
    // this.newJoineesArr = Object.values(this.newJoinees);
    console.log("I am after filter NJ", this.userProfileData)
    localStorage.setItem("userProfileData", JSON.stringify( this.userProfileData))
    console.log("deleted!!!")
    location.reload();
  }
  onFamily(data: any) {
    this.newjoineesFamilyArr = Object.values(data);
    console.log(this.newjoineesFamilyArr);
    this.newJoineesFamilyColumn=[
      {
        prop: "familyFullName",
        name: "Name"
      },
      {
        prop: "familyFullAdd",
        name: "Address"
      },
      {
        prop: "familyAadharNum",
        name: "Aadhaar"
      },
      {
        prop: "familyGender",
        name: "Gender"
      },
      {
        prop: "familyMobNumber",
        name: "Number"
      },
      {
        prop: "familyVoterId",
        name: "Voter Card"
      }
    ]

  }
}
// 100000000000: 
// profileAadharNum : 100000000000
// profileCreateTime : "12th March 2024"
// profileEmailAdd : "john.smith@gmail.com"
// profileFamily :  {,…}
// 123456789012 : 
// familyAadharNum : 123456789012
// familyFullAdd : "not home"
// familyFullName : "Milind Patil"
// familyGender : "Male"
// familyMobNumber : 7424434194
// familyVoterId: "DEF1234567"
// profileFullAdd: "home"
// profileFullName: "Ishan Patil"
// profileGender: "Male"
// profileMobNumber: 7292012327
// profilePhoto: "C:\\fakepath\\Screenshot 2024-02-01 152920.png"
// profilePinCode: 100000
// profileVoterId: "ABC1234567"