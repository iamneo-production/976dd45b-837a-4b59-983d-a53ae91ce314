import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { addon } from 'src/app/class/addon';
import { AddonserviceService } from 'src/app/services/addonservice.service';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Component({
  selector: 'app-addon-home',
  templateUrl: './addon-home.component.html',
  styleUrls: ['./addon-home.component.css']
})
export class AddonHomeComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
=======
  
  addons: addon[] = [];

  private getAddons(){
    this.addservice.getList().subscribe(data=>{
      console.log(data);
      this.addons = data;
    });
  }

  constructor(private router:Router,private addservice:AddonserviceService) { }

  updateadd(addOnid:number){
    this.router.navigate(['admin/addon/updateaddons',addOnid]);
  }

  deleteadd(addOnid:number){
    this.addservice.deleteaddon(addOnid).subscribe(data =>{
      this.getAddons();
    })
  }

  ngOnInit(): void{
    this.getAddons()
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
  }

}
