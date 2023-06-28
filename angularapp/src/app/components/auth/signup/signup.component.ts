
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../../../class/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  role ?: string;

  constructor(private userService: UserserviceService,private fb: FormBuilder, private router: Router,private toastr: ToastrService) { }
  newuser: User = new User();

    ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userRole: ['', Validators.required],
      username: ['', Validators.required],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          ),
        ]),
      ],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required
      ]],
      confirmPassword: ['', Validators.required]
    },  { validator: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(formGroup: FormGroup): any{
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get f(): any { return this.registrationForm.controls; }



  onSubmit(val: string): any{
    this.role=val;
    if(val==='admin'){
      this.newuser.userRole='Admin';
    }
    else if(val==='user'){
      this.newuser.userRole='User';
    }
    this.checkEmail();
  }

   checkEmail(): any{
    this.userService.checkEmail(this.newuser.email).subscribe(data =>{
      console.log(data);
      console.log(this.role);
      if(data===false && this.role==='user'){
        this.saveuser();
      }
      else if(data===false && this.role==='admin'){
        this.saveadmin();
      }
      else if(data===true){
        alert('Email already exist');}

    },

    error => console.log(error));
  }
  saveuser(): any{
    console.log(this.registrationForm.value);
    this.userService.storeUser(this.newuser).subscribe(data =>{
      console.log(data);
      this.toastr.success('User Account created successfully','Register Status' );
      this.goTologin();
    },

        error => console.log(error));
  }

  saveadmin(): any{
    console.log(this.registrationForm.value);
    this.userService.storeAdmin(this.newuser).subscribe(data =>{
      console.log(data);
      this.toastr.success('Admin Account created successfully','Register Status' );
      this.goTologin();
    },

    error => console.log(error));
  }

  goTologin(): void
  {
    this.router.navigate(['/login']);
  }

}
