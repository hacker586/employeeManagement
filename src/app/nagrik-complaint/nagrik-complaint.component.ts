import { Component } from '@angular/core';
import {  ActivatedRoute, RouterOutlet } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nagrik-complaint',
  standalone: true,
  imports: [RouterOutlet,NagrikHomeComponent, CommonModule],
  templateUrl: './nagrik-complaint.component.html',
  styleUrl: './nagrik-complaint.component.css'
})
export class NagrikComplaintComponent {
  // Initialization
  section: string='';

  // Constructor and ngOnInit
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.section = params['section'];
    });
    // console.log("Load section, ",this.section);
  }


  // Other Functions
}
