import { Component, OnInit } from '@angular/core';
import { addon } from '../../../../class/addon';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonserviceService } from '../../../../services/addonservice.service';

@Component({
  selector: 'app-updateaddons',
  templateUrl: './updateaddons.component.html',
  styleUrls: ['./updateaddons.component.css']
})
export class UpdateaddonsComponent implements OnInit{
  addOnid = 0;
  newaddon: addon = new addon();
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
}
