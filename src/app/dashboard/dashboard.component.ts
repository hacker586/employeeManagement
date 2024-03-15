import { Component, OnInit, ViewChild } from '@angular/core';
// import data from "../../data/data";
// import janSevak from "../../data/janSevakList";
import nagrik from "../../data/nagrik";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { LinearScale,CategoryScale, BarController, BarElement, PieController, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  acceptedJoinees = JSON.parse(localStorage.getItem("acceptedJoinees")|| "[]");
  jansevakArr = JSON.parse(localStorage.getItem("JansevakArr" )|| "[]");
  nagrik = JSON.parse(localStorage.getItem("allComplaints")|| '[]');
  acceptedJoineesColumns: any[] = []
  jansevakArrColumns: any[] = []
  allComplaintsColumns: any[] = []
  bool: boolean = true;
//   profileAadharNum: "123456789012"
// profileCreateTime: "14th March 2024"
// profileEmailAdd: "a@gmail.com"
// profileFamily: 
// {
// 123456789012: 
// {
// familyFullName: "Milind Patil", 
// familyMobNumber: 7424434194, 
// familyFullAdd: "not home",
// familyFullName: "Milind Patil"
// familyGender: "Male"
// familyMobNumber: 7424434194
// familyVoterId: "DEF1234567"
// }
// profileFullAdd: "234567"
// profileFullName: "qwerty"
// profileGender: "Male"
// profileMobNumber: "1234567890"
// profilePhoto: "C:\\fakepath\\Screenshot 2024-02-01 152920.png"
// profilePinCode: "123456"
// profileVoterId: "ASD1234567"
  
  // constructor(private chart: Chart){}
  ngOnInit(): void {
    this.jansevakArr = JSON.parse(localStorage.getItem("JansevakArr")|| "[]");
    this.acceptedJoinees = JSON.parse(localStorage.getItem("acceptedJoinees")|| "[]")
    // console.log(typeof(this.jansevakArr))
    console.log("HII", this.jansevakArr)
    Chart.register(LinearScale,CategoryScale,BarController,BarElement,DoughnutController,ArcElement,Tooltip,Legend);
    this.bool = true;
    this.acceptedJoineesColumns = [
     {
      prop:"profileFullName",
      name:"Name",
     },{
      prop:"profileMobNumber",
      name:"Number",
     },{
      prop:"profileEmailAdd",
      name:"Email",
     },{
      prop:"profileFullAdd",
      name:"Address",
     },{
      prop:"profilePinCode",
      name:"Pincode",
     },{
      prop:"profileAadharNum",
      name:"Aadhaar",
     },{
      prop:"profileVoterId",
      name:"Voter ID",
     },{
      prop:"profileGender",
      name:"Gender",
     },
    ];
    this.jansevakArrColumns = [
      {
        prop: 'name',
        name: 'name',
      },
      {
        prop: "email",
        name: 'email',
      },
      {
        prop: "mobileNo",
        name: "mobileNo",
      },
      {
        prop: 'age',
        name: 'age'
      },
      {
        prop: 'gender',
        name: 'gender'
      },
      {
        prop: "address",
        name: 'address',
      },
      {
        prop: 'aadhaar',
        name: 'aadhaar',
      },
      {
        prop: "voterId",
        name: 'voterId',
      },
    ]
    this.allComplaintsColumns = [
      {
        prop: 'complaintInitial',
        name: 'user Id'
      },
      {
        prop: 'complaintPhoto',
        name: 'Profile Photo'
      },
      {
        prop: 'complaintCategory',
        name: 'Category'
      },
      {
        prop: 'complaintSubject',
        name: 'Subject'
      },
      {
        prop: "complaintDescription",
        name: 'Description'
      },{
        prop: "complaintAssignedHR",
        name: 'Assigned HR'
      },{
        prop: "complaintStatus",
        name: 'status'
      },{
        prop:"complaintCreateTime",
        name:"Date & Time"
      }

    ];
    const piec = document.getElementById('piechart') as HTMLCanvasElement;
    console.log("higraph", piec);
    document.addEventListener('DOMContentLoaded', () => {
      const piec = document.getElementById('piechart') as HTMLCanvasElement | null;
      const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;

      if (piec && ctx) {
          if (ctx) {
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                  label: 'Total Nagrik',
                  data: [24, 43, 82, 67, 41, 55],
                  backgroundColor: [
                    'rgb(70, 70, 185)',
                    'rgb(255, 165, 0)',
                    'rgb(70, 70, 185)',
                    'rgb(255, 165, 0)',
                    'rgb(70, 70, 185)',
                    'rgb(255, 165, 0)',
                    'rgb(70, 70, 185)'
                  ],
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                },
                plugins:{
                  tooltip:{
                    enabled: true,
                  }
                }
              }
            });
          };

          if (piec) {
            new Chart(piec, {
              type: 'doughnut',
              options:{
                plugins:{
                  legend:{
                    display:true,
                  }
                }
              },
              data: {
                labels: [
                  'In progress',
                  'Solved',
                  'Pending'
                ],
                datasets: [{
                  label: 'Complaints',
                  data: [170, 80, 100],
                  backgroundColor: [
                    'rgb(255, 200, 48',
                    'rgb(255, 165, 0)',
                    'rgb(70, 70, 185)'
                  ],
                  hoverOffset: 4
                }]
              },
            });
          }
          console.log('Element found:', piec);
      } else {
          console.error('Element not found');
      }
  });
  };
  boolFalse() {
    this.bool = false;
  };




}
