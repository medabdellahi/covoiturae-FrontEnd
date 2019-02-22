import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/Authentication.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mode:number;
  constructor(private authService:AuthenticationService, private router:Router) { 

  }

  ngOnInit() {
  }
  onLogin(dataForm){
  console.log(dataForm);
  this.authService.login(dataForm).subscribe(resp=>{
     let jwt=resp.headers.get("authorization");
     console.log("jwt: "+jwt);
     this.authService.saveToken(jwt);
    this.router.navigateByUrl("/home")
  },
  err=>{
    this.mode=1;
     
  }
  )

}

}
