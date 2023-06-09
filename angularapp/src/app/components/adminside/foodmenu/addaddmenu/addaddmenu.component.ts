import { Component, OnInit } from '@angular/core';
import { Addmenu } from '../../../../class/addmenu';
import { AddmenuserviceService } from '../../../../services/addmenuservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addaddmenu',
  templateUrl: './addaddmenu.component.html',
  styleUrls: ['./addaddmenu.component.css']
})
export class AddaddmenuComponent implements OnInit{

  addmenu: Addmenu = new Addmenu();
  constructor(private addmenuService: AddmenuserviceService,
    private router: Router){ }


  ngOnInit(): void {  
  }

  saveAddMenu(){
    this.addmenuService.addMenu(this.addmenu).subscribe( data => {
      console.log(data);
      this.gotoAddmenu();
    },
    error => console.log(error));
  }

  gotoAddmenu(){
    this.router.navigate(['/admin/addmenu'])
  }

  onSubmit(){
    console.log(this.addmenu);
    this.saveAddMenu();
  }

}