import { Component, OnInit } from '@angular/core';
import { Addmenu } from '../../../../class/addmenu';
import { AddmenuserviceService } from '../../../../services/addmenuservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addmenu-home',
  templateUrl: './addmenu-home.component.html',
  styleUrls: ['./addmenu-home.component.css']
})
export class AddmenuHomeComponent implements OnInit {

  addmenus: Addmenu[] = [];

  constructor(private router: Router, private addmenuService: AddmenuserviceService){}

  ngOnInit(): void {
      this.getAddmenus();
  }



  private getAddmenus(): any{

    this.addmenuService.getMenu().subscribe(data => {
      console.log(data);
      this.addmenus = data;
    });
  }


  updateFoodMenu(foodMenuID: number): any{
    this.router.navigate(['admin/addmenu/Updateaddmenu',foodMenuID]);
  }

  deleteFoodMenu(foodMenuID: number): any{
    this.addmenuService.deleteMenu(foodMenuID).subscribe( data => {
      this.getAddmenus();
    });
  }



}
