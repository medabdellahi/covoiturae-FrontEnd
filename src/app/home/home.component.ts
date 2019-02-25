import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/Authentication.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    if(this.authService.jwtToken==null)
      this.router.navigateByUrl("/login");
  }

}
