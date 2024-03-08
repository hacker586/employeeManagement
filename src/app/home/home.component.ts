import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddJanSevakComponent } from '../add-jan-sevak/add-jan-sevak.component';
import { AddAnnouncementComponent } from '../add-announcement/add-announcement.component';
import { AddNotificationComponent } from '../add-notification/add-notification.component';
import { AddNagrikComponent } from '../add-nagrik/add-nagrik.component';
import { AddProfileComponent } from '../add-profile/add-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule, 
    NgxDatatableModule,
    ReactiveFormsModule, 
    AddJanSevakComponent, 
    DashboardComponent,
    AddAnnouncementComponent,
    AddNotificationComponent,
    AddNagrikComponent,
    AddProfileComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  componentName: string= "";
  janSevakArr: any[] = [];
  
 
  constructor(private router:Router){}
  ngOnInit(): void {
    // console.log(this.data);
    // console.log(this.jansevak);
    // console.log(this.nagrik);
    this.componentName = "dashboard"
    
  }
  showDashboard(){
    // this.router.navigate(['/home'])
    this.componentName = "dashboard";
    location.reload();

    // console.log("Haha1")
  }
  
  
  showAddJansevak(){
    this.componentName = "jansevak" 
    // console.log("Haha2")
  }
  showAddAnnouncement(){
    this.componentName = "announcement"
    // console.log("Haha3")
  }
  showAddNotification(){
    this.componentName = "notification"
    // console.log("Haha4")
  }
  showViewNagrik(){
    this.componentName = "nagrik"
    // console.log("Haha5")
  }
  showProfile(){
    this.componentName = "profile"
    // console.log("Haha6")
  }
}
