import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nagrik-profile-view',
  standalone: true,
  imports: [RouterOutlet, NagrikHomeComponent, CommonModule],
  templateUrl: './nagrik-profile-view.component.html',
  styleUrl: './nagrik-profile-view.component.css'
})
export class NagrikProfileViewComponent {
  // Initializations
  
  userAadhar= 100000000000; //Has to be taken from Database

  nagrikFormData= JSON.parse(localStorage.getItem('userProfileData')|| '[]') ;
  familyMembers= this.nagrikFormData[this.userAadhar]?.profileFamily || '[]'
  familyMembersDetails: any[] = Object.values(this.familyMembers);
  familySize:number= Object.keys(this.familyMembers).length;

  // Constructor
  constructor(){}

  ngOnInit(){
    // console.log("Nagrik Details", this.nagrikFormData[this.userAadhar]);
    // console.log("Nagrik Family Details", this.familymembersdetails);
    // console.log("Nagrik Family Details2", this.familymembersdetails);
    // console.log("Nagrik Family IDs ", this.familyID);
    // console.log(this.familyMembersDetails[0].familyFullName);
  }
}
