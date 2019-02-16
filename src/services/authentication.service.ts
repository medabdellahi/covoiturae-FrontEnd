import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService{
    private host :String="localhost:8080";
    constructor(private http:HttpClient){

    }
login(user){
    return this.http.post(this.host+"/login",user,{observe:'response'});
}
}