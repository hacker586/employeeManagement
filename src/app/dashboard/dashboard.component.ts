import { Component, OnInit, ViewChild } from '@angular/core';
import data from "../../data/data";
// import janSevak from "../../data/janSevakList";
import nagrik from "../../data/nagrik";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { Chart,LinearScale,CategoryScale, BarController, BarElement, PieController, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
// import chart from 'chart.js'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  data = data;
  jansevakArr = JSON.parse(localStorage.getItem("JansevakArr" )|| "{}");
  nagrik = nagrik;
  columns1: any[] = []
  columns2: any[] = []
  columns3: any[] = []
  bool: boolean = true;


  // constructor(private chart: Chart){}
  ngOnInit(): void {
    this.jansevakArr = JSON.parse(localStorage.getItem("JansevakArr")|| "{}");
    // console.log(typeof(this.jansevakArr))
    console.log("HII", this.jansevakArr)
    Chart.register(LinearScale,CategoryScale,BarController,BarElement,DoughnutController,ArcElement,Tooltip,Legend);
    this.bool = true;
    this.columns1 = [
      {
        prop: 'complaintId',
        name: 'complaintId'
      },
      {
        prop: 'name',
        name: 'name'
      },
      {
        prop: 'hrAssign',
        name: 'hrAssign'
      },
      {
        prop: 'subject',
        name: 'subject',
      },
      {
        prop: 'category',
        name: 'category',
      },
      {
        prop: 'status',
        name: 'status'
      }
    ];
    this.columns2 = [
      {
        prop: 'name',
        name: 'name',
      },
      {
        prop: "email",
        name: 'email',
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
    this.columns3 = [
      {
        prop: 'id',
        name: 'id'
      },
      {
        prop: 'name',
        name: 'name'
      },
      {
        prop: 'age',
        name: 'age'
      },
      {
        prop: "phone",
        name: 'phone'
      }
    ];
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const piec = document.getElementById('piechart') as HTMLCanvasElement;
    console.log("hi", ctx)
    
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


  };
  boolFalse() {
    this.bool = false;
  };




}
