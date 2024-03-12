import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';

@Component({
  selector: 'app-nagrik-complaint',
  standalone: true,
  imports: [RouterOutlet,NagrikHomeComponent],
  templateUrl: './nagrik-complaint.component.html',
  styleUrl: './nagrik-complaint.component.css'
})
export class NagrikComplaintComponent {

}
