import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService{
    private host: String ="http://localhost:8080";
     jwtToken=null;
    constructor(private http:HttpClient){
    }
    saveToken(jwt:string){
        localStorage.setItem('jwtToken',jwt);
        this.jwtToken=jwt;
    }
login(user){
    
    return this.http.post(this.host+"/login",user,{observe:'response'});
}
loadToken(){
    this.jwtToken = localStorage.getItem('jwtToken');
}

logout(){
    this.jwtToken=null;
    localStorage.removeItem('jwtToken');
}
}  