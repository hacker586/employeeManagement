import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import data from '../../data/data'
import janSevak from '../../data/janSevakList'
import nagrik from '../../data/nagrik'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-add-nagrik',
  standalone: true,
  imports: [NgxDatatableModule],
  templateUrl: './add-nagrik.component.html',
  styleUrl: './add-nagrik.component.css'
})
export class AddNagrikComponent implements OnInit {
  nagrikColumns: any[] = []
  name: any;
  data = data;
  nagrik = nagrik;
  rowData : any[]=[];
  @ViewChild('viewButton', {static: true})
  viewButton!: TemplateRef<any>;
  ngOnInit() {
    this.nagrikColumns = [
      {
        prop:'complaintId',
        name:'complaintId'
      },{
        prop: 'name',
        name: 'name' 
      },{ 
        prop: 'hrAssign', 
        name: 'hrAssign' 
      },{ 
        prop: 'subject', 
        name: 'subject' ,
       
      },{
        prop: 'category',
        name: 'category',
      },{
        prop: 'status',
        name: 'status'
      },{
        name: 'view',
        cellTemplate: this.viewButton
      }
    ];
  }
  viewData(row: any){
    console.log(row);
    this.rowData[0] = row;
    // this.name = this.rowData[0].name
    console.log(this.rowData[0].name)
  }
}
