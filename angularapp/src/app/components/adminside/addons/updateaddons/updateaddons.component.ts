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
  addOnid : number = 0;
  newaddon : addon = new addon();

  

  constructor(private router:Router,private addservice:AddonserviceService,private route:ActivatedRoute){

  }


  ngOnInit(): void{
    this.addOnid = this.route.snapshot.params['addOnid'];
      this.addservice.getAddonId(this.addOnid).subscribe(data => {
      this.newaddon = data;
    });
  }

  gotoaddon(){
    this.router.navigate(['admin/addon']);
  }

  onSubmit(){
    this.addservice.updateAddon(this.addOnid,this.newaddon).subscribe(data =>{
      this.gotoaddon();
    })
  }

  
}
