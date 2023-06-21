import { Component, OnInit } from '@angular/core';
import { Addon } from '../../../../class/addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../../../../services/addonservice.service';

@Component({
  selector: 'app-addaddons',
  templateUrl: './addaddons.component.html',
  styleUrls: ['./addaddons.component.css']
})

export class AddaddonsComponent implements OnInit{

  newaddon: Addon = new Addon();

  constructor(private router: Router, private addservice: AddonserviceService){

  }
  saves(): void{
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
}
