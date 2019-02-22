import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/Authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covoiturageFrontEnd';
  constructor(private authService : AuthenticationService, private router : Router){

  }
  onLogout(){
     this.authService.logout();
     this.router.navigateByUrl("/login")
  }
}
