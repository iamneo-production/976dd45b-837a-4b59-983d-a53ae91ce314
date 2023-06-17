import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../class/login';
import { LoginService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private loginService: LoginService,private fb: FormBuilder, private router: Router) { }
  loginFlag!: boolean;
  login: Login= new Login();
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
          alert('Email ID does not exist');
        }
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
            alert('User Login successfully');
            this.goToUserPage();
          }

          else if(data===false){
          alert('Invalid User Credentials');
          }
      }, error => console.log(error));

  }

  loginAdmin(): any{
    this.loginService.isAdminPresent(this.login).subscribe(data =>{
      console.log(data);
      if(data===true){
        this.loginService.loginStatus = true;
        alert('Admin Login successfully');
        this.goToAdminPage();
      }
      else if(data===false){
      alert('Invalid Admin Credentials');
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
}
