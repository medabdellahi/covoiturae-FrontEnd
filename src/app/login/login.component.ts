import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mode:number;
  constructor(private authService:AuthenticationService) { 

  }

  ngOnInit() {
  }
  onLogin(dataForm){
  console.log(dataForm);
  this.authService.login(dataForm).subscribe(resp=>{
    console.log(resp);
  },err=>{
    this.mode=1;
  }
  )

}
}
