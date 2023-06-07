import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from 'src/app/services/login.service';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
<<<<<<< HEAD
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
=======

@Injectable({
  providedIn: 'root'
})

export class AuthComponent implements CanActivate {

  status: boolean = false;

  constructor(private loginServices: LoginService, private route :Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    router: RouterStateSnapshot
  ): 

  boolean {
    if(this.isloggedIn()){
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }

  public isloggedIn(){
    let status = false;
    if(this.loginServices.loginStatus===true){
      status=true;
    }
    else{
      status=false;
    }
    return status;
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
  }

}
