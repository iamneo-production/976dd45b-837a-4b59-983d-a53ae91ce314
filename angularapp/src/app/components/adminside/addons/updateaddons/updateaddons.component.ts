import { Component, OnInit } from '@angular/core';
import { Addon } from '../../../../class/addon';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonserviceService } from '../../../../services/addonservice.service';

@Component({
  selector: 'app-updateaddons',
  templateUrl: './updateaddons.component.html',
  styleUrls: ['./updateaddons.component.css']
})
export class UpdateaddonsComponent implements OnInit{
  addOnid = 0;
  newaddon: Addon = new Addon();
  addonid = 'addOnid';

  constructor(private router: Router, private addservice: AddonserviceService, private route: ActivatedRoute){

  }


  ngOnInit(): void{
    this.addOnid = this.route.snapshot.params[this.addonid];
    this.addservice.getAddonId(this.addOnid).subscribe(data => {
    this.newaddon = data;
    });
  }

  gotoaddon(): void{
    this.router.navigate(['admin/addon']);
  }

  onSubmit(): void{
    this.addservice.editAddon(this.addOnid, this.newaddon).subscribe(data => {
    this.gotoaddon();
    } );
  }
  
  back(): any{
  
    this.router.navigate(['admin/addon']);
  }
}
