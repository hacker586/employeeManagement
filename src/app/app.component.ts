import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router){}
  // title = 'janSevak';
  toLoginPage(){
    this.router.navigate(['/login'])
  }
  toHomePage(){
    console.log("done")
    this.router.navigate(['/home'])
  }
}
