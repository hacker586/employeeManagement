import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';

@Component({
  selector: 'app-nagrik-view-jansevak',
  standalone: true,
  imports: [RouterOutlet,NagrikHomeComponent],
  templateUrl: './nagrik-view-jansevak.component.html',
  styleUrl: './nagrik-view-jansevak.component.css'
})
export class NagrikViewJansevakComponent {

}
