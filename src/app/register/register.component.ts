import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/Authentication.service';
import { Router } from '@angular/router';
import { ParseError } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
private mode:number;
  private ErrorMsg:string;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
onRegister(data){
  let pw = data.password;
  let user = { "username": data.username,"password":pw};

  this.authService.register(data).subscribe(resp => {

    this.authService.login(user).subscribe(resp => {
      let jwt = resp.headers.get("authorization");
      this.authService.saveToken(jwt);
      this.router.navigateByUrl("/home")
    },
      err => {
        console.log(err);

      }
    )
   
  },
    err => {
      this.mode = 1;
      this.ErrorMsg = err.error.message;      

    }
  )
}
}
