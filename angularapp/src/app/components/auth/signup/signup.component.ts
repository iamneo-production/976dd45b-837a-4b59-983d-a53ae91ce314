
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../../../class/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup<any>;
  role ?:String;

  constructor(private userService:UserserviceService,private fb: FormBuilder, 
    private router : Router) { }
  newuser : User = new User();
    
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
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get f() { return this.registrationForm.controls; }


  
  onSubmit(val:string){
    this.role=val;
    if(val=="admin"){
      this.newuser.userRole="Admin";
    }
    else if(val=="user"){
      this.newuser.userRole="User";
    }
      this.checkEmail();
  }
  
   checkEmail(){
    this.userService.checkEmail(this.newuser.email).subscribe(data =>{
      console.log(data);
      console.log(this.role);
      if(data==false && this.role=="user"){
        this.saveuser();
      }
      else if(data==false && this.role=="admin"){
        this.saveadmin();
      }
      else if(data==true)
        alert("Email already exist");
      
    },
      
    error => console.log(error)); 
  }
  saveuser(){
    console.log(this.registrationForm.value);
      this.userService.storeUser(this.newuser).subscribe(data =>{
        console.log(data);
        alert("User Account created successfully");
        this.goTologin();
      },
        
        error => console.log(error)); 
  }

  saveadmin(){
    console.log(this.registrationForm.value);
      this.userService.storeAdmin(this.newuser).subscribe(data =>{
        console.log(data);
        alert("Admin Account created successfully");
        this.goTologin();
      },
        
        error => console.log(error)); 
  }

  goTologin()
  {
    this.router.navigate(['/login']);
  }

}
