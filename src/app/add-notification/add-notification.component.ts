import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-add-notification',
  standalone: true,
  imports: [NgxDatatableModule],
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  newJoinees: any[] = [];
  newJoineesColumns: any[] = [];
  tempData: any[]= [{
    name:"sagar",
    number: 1122,
    email: "ahahha",
    aadhaar: 1122334455,
    gender: "M", 
}]
  @ViewChild('acceptButton', {static: true})
  acceptButton!: TemplateRef<any>;
  @ViewChild('declineButton', {static: true})
  declineButton!: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
    
    // this.newJoinees = JSON.parse(localStorage.getItem('newJoinees') || '[]');
    this.newJoinees = this.tempData;
    this.newJoineesColumns = [
      {
        prop: 'name',
        name: 'name'
      },
      {
        prop: 'number',
        name: 'number'
      },
      {
        prop: 'email',
        name: 'email'
      },
      {
        prop: 'aadhaar',
        name: 'aadhaar'
      },
      {
        prop: 'gender',
        name: 'gender'
      },
      {
        // prop: 'accept',
        name: 'accept',
        cellTemplate: this.acceptButton
      },
      {
        // prop: 'decline',
        name: 'decline',
        cellTemplate: this.declineButton
      }
    ];
  }
  onAccept(){


  }
  onDecline(){

  }
}
