import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nagrik-announcements',
  standalone: true,
  imports: [RouterOutlet,NagrikHomeComponent, CommonModule],
  templateUrl: './nagrik-announcements.component.html',
  styleUrl: './nagrik-announcements.component.css'
})
export class NagrikAnnouncementsComponent {
// Initialization
allAnnouncements= JSON.parse(localStorage.getItem('announcement')|| '[]') ;

}
