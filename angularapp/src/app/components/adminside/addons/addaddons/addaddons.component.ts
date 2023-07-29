import { Component, OnInit,ViewChild } from '@angular/core';
import { Addon } from '../../../../class/addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../../../../services/addonservice.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addaddons',
  templateUrl: './addaddons.component.html',
  styleUrls: ['./addaddons.component.css']
})

export class AddaddonsComponent implements OnInit{

  newaddon: Addon = new Addon();

  addonForm: FormGroup;

  constructor(private router: Router, private addservice: AddonserviceService, private fb: FormBuilder,private toastr: ToastrService){

  }
  saves(): void{
    console.log(this.newaddon);
    this.addservice.addAddon(this.newaddon).subscribe((data) => {
    console.log(data);
    },
    (error) => {
      console.error('Failed to add food item:', error);
      this.toastr.warning('New Addon is not added successfully!','Addon Status' );
    }
    
   );
     this.gotoaddon();
  }

  ngOnInit(): void{
    this.addonForm = this.fb.group({
      addOnName:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      addAddonPrice:['',[Validators.required,Validators.pattern("^[1-9][0-9]*")]],
      addonDescription:['']
    }

    )

  }

  gotoaddon(): void{
    this.router.navigate(['admin/addon']);
  }

  onSubmit(): void{
    console.log(this.addonForm);
    this.saves();
  }

  back(): any{
  
    this.router.navigate(['admin/addon']);
  }
}
