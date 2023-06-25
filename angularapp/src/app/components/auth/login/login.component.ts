import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../class/login';
import { LoginService } from 'src/app/services/loginservice.service';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginFlag!: boolean;
  login: Login= new Login();
  userId= 0;

  constructor(private loginService: LoginService,private fb: FormBuilder, private router: Router,private data: DataService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          ),
        ]),
      ],
      password: ['', [Validators.required
        // , Validators.minLength(6)
      ]]
    });
  }

  get f(): any { return this.loginForm.controls; }

    onSubmit(): void{

      this.checkUserRole();
      this.getUserId();

    }

    checkUserRole(): any{

      this.loginService.checkUserRolebyEmail(this.login.email).subscribe(data =>{
        console.log(data);
        if(data==='User' ){
          this.loginUser();
        }
        else if(data==='Admin'){
          this.loginAdmin();
        }
        else if(data==='Email ID not found'){
          this.toastr.error('Email ID does not exist', 'Login Status',{
            timeOut: 5000,
          });
        }
        },

        error => console.log(error));
  }

  getUserId(): any{
    this.loginService.getUserIdbyEmail(this.login.email).subscribe(data =>{
      console.log(data);
      this.userId=data;
      this.storeUserId(this.userId);
    },

    error => console.log(error));
  }

  loginUser(): any{
      this.loginService.isUserPresent(this.login).subscribe(data =>
        {

          console.log(data);

          if(data=== true)
          {
            this.loginService.loginStatus = true;
            this.toastr.success('User Login successful','Login Status' );
            this.goToUserPage();
          }

          else if(data===false){
            this.toastr.error( 'Invalid User Credentials','Login Status');
          }
      }, error => console.log(error));

  }

  loginAdmin(): any{
    this.loginService.isAdminPresent(this.login).subscribe(data =>{
      console.log(data);
      if(data===true){
        this.loginService.loginStatus = true;
        this.toastr.success( 'Admin Login successful','Login Status',);
        this.goToAdminPage();
      }
      else if(data===false){
        this.toastr.error( 'Invalid Admin Credentials','Login Status');
      }
    },

      error => console.log(error));
  }
  goToUserPage(): any{
    this.router.navigate(['/user']);
  }

  goToAdminPage(): any{
    this.router.navigate(['/admin']);
  }

  storeUserId(text1): any{
    this.data.storeUserId(text1);
  }
}
