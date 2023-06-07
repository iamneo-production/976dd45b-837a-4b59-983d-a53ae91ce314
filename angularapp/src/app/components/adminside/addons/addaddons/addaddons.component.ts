import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { addon } from '../../../../class/addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../../../../services/addonservice.service';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Component({
  selector: 'app-addaddons',
  templateUrl: './addaddons.component.html',
  styleUrls: ['./addaddons.component.css']
})
<<<<<<< HEAD
export class AddaddonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======

export class AddaddonsComponent implements OnInit{

  newaddon : addon = new addon();

  constructor(private router:Router,private addservice:AddonserviceService){

  }
  saves(){
    this.addservice.addAddon(this.newaddon).subscribe(data=>{
      console.log(data);
      this.gotoaddon();
    });
  }

  ngOnInit(): void{

  }

  gotoaddon(){
    this.router.navigate(['admin/addon']);
  }

  onSubmit(){
    this.saves();
  }

  
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
}
