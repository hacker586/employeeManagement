import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, RouterOutlet} from '@angular/router';

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
}
