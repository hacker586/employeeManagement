import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterLink, Router, RouterOutlet} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-nagrik-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './nagrik-home.component.html',
  styleUrl: './nagrik-home.component.css'
})
export class NagrikHomeComponent implements OnInit{
  // Initializations

  // Constructor
  constructor(private router: Router){}

  // OnInit
  ngOnInit(){
    if (this.router.url === '/nagrikHome') this.router.navigate(['/nagrikProfileView']);
  }

  // Other Functions

}
