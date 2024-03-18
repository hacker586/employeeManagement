import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-view-jansevak',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule],
  templateUrl: './view-jansevak.component.html',
  styleUrl: './view-jansevak.component.css'
})
export class ViewJansevakComponent implements OnInit {
  @ViewChild('declineButton', {static: true})
  declineButton!: TemplateRef<any>;
  JansevakArr = JSON.parse(localStorage.getItem("JansevakArr") || "[]");
  jansevakArrColumns : any[] = [];
  rejectedJansevakArr = JSON.parse(localStorage.getItem("rejectedJansevakArr") || "[]");
  rejectedJansevakArrColumns : any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.jansevakArrColumns=[
      {
        prop:"name",
        name:"name"
      },{
        prop: "email",
        name: "Email"
      },{
        prop: "mobileNo",
        name: "Phone Number"
      },{
        prop: "age",
        name: "age"
      },{
        prop:"address",
        name:"address"
      },{
        prop:'gender',
        name:"gender"
      },{
        prop:"aadhaar",
        name:"aadhaar"
      },{
        prop:"voterId",
        name:"voterId"
      },{
        name:"Decline",
        cellTemplate: this.declineButton,
      }
    ]
    this.rejectedJansevakArrColumns=[
      {
        prop:"name",
        name:"name"
      },{
        prop: "email",
        name: "Email"
      },{
        prop: "mobileNo",
        name: "Phone Number"
      },{
        prop: "age",
        name: "age"
      },{
        prop:"address",
        name:"address"
      },{
        prop:'gender',
        name:"gender"
      },{
        prop:"aadhaar",
        name:"aadhaar"
      },{
        prop:"voterId",
        name:"voterId"
      }
    ];
  }
  onDecline(row: any){
    // console.log("haha",row);
    // this.rejected.push(this.newJoinees.filter((e)=>e.profileAadharNum==row.profileAadharNum));
    this.rejectedJansevakArr.push(row);
    // this.rejectedArr.push(Object.values(this.rejected));
    localStorage.setItem("rejectedJansevakArr", JSON.stringify( this.rejectedJansevakArr))
    this.JansevakArr = (this.JansevakArr).filter((e: any)=>e.name!=row.name);
    // this.newJoineesArr = Object.values(this.newJoinees);
    // console.log( this.rejectedJansevakArr)
    localStorage.setItem("JansevakArr", JSON.stringify( this.JansevakArr))
    console.log("deleted!!!")
    location.reload();
  }

}
// aadhaar: 123456789012
// address: "123456789"
// age: 12*
// email: "sagar@gmail.com"*
// gender: "Male"
// mobileNo: 1234567890 *
// name: "dfghj" *
// voterId: "ABC1234567"