import { Component, OnInit } from '@angular/core';
import data from "../../data/data";
import janSevak from "../../data/janSevakList";
import nagrik from "../../data/nagrik";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  data = data;
  jansevak = janSevak;
  nagrik = nagrik;
  columns1: any[] = []
  columns2: any[] = []
  columns3: any[] = []
  ngOnInit(): void {
    this.columns1 = [
      {
        prop:'complaintId',
        name:'complaintId'
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
        name: 'subject' ,
        width: 300
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
    this.columns2=[
      {
        prop:'id',
        name:'id'
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
        prop:"phone",
        name:'phone'
      }
    ]
    this.columns3=[
      {
        prop:'id',
        name:'id'
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
        prop:"phone",
        name:'phone'
      }
    ]
  }


}
