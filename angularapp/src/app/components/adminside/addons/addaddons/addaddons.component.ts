import { Component, OnInit } from '@angular/core';
import { Addon } from '../../../../class/addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../../../../services/addonservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addaddons',
  templateUrl: './addaddons.component.html',
  styleUrls: ['./addaddons.component.css']
})

export class AddaddonsComponent implements OnInit{

  newaddon: Addon = new Addon();

  constructor(private router: Router, private addservice: AddonserviceService,private toastr: ToastrService){

  }
  saves(): void{
    this.toastr.success('New Addon is added successfully!','Addon Status' );
    this.addservice.addAddon(this.newaddon).subscribe(data => {
    console.log(data);
    this.gotoaddon(); } );
  }

  ngOnInit(): void{

  }

  gotoaddon(): void{
    this.router.navigate(['admin/addon']);
  }

  onSubmit(): void{
    this.saves();
  }

  back(): any{
  
    this.router.navigate(['admin/addon']);
  }
}
