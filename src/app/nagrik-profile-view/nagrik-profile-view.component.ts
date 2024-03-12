import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';

@Component({
  selector: 'app-nagrik-profile-view',
  standalone: true,
  imports: [RouterOutlet,NagrikHomeComponent],
  templateUrl: './nagrik-profile-view.component.html',
  styleUrl: './nagrik-profile-view.component.css'
})
export class NagrikProfileViewComponent {

}
