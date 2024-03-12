import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';

@Component({
  selector: 'app-nagrik-announcements',
  standalone: true,
  imports: [RouterOutlet,NagrikHomeComponent],
  templateUrl: './nagrik-announcements.component.html',
  styleUrl: './nagrik-announcements.component.css'
})
export class NagrikAnnouncementsComponent {

}
