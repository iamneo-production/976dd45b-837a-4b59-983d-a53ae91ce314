import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { addon } from '../../../class/addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../../../services/addonservice.service';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======

  add(){
    this.router.navigate(['admin/addon/addAddon']);
  }


  constructor(private router:Router,private addservice:AddonserviceService){

  }

  ngOnInit(): void{
    
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
  }

}
