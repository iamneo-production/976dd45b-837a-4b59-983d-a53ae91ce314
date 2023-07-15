import { Component, OnInit } from '@angular/core';
import { Addmenu } from '../../../../class/addmenu';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmenuserviceService } from '../../../../services/addmenuservice.service';

@Component({
  selector: 'app-updateaddmenu',
  templateUrl: './updateaddmenu.component.html',
  styleUrls: ['./updateaddmenu.component.css']
})
export class UpdateaddmenuComponent implements OnInit {

  foodMenuID= 0;
  addmenus: Addmenu = new Addmenu();


  constructor(private router: Router,private addmenuService: AddmenuserviceService, private route: ActivatedRoute){

  }


  ngOnInit(): void {
    this.foodMenuID=this.route.snapshot.params[`foodMenuID`];
    this.addmenuService.getAddmenuById(this.foodMenuID).subscribe(data =>{

      this.addmenus = data;
    });
  }


  gotoAddmenu(): any{

    this.router.navigate(['admin/addmenu']);
  }

  onSubmit(val: string): void{
    if(val==='Veg'){
      this.addmenus.foodMenuType='Veg';
    }
    else if(val==='Non-Veg'){
      this.addmenus.foodMenuType='Non-Veg';
    }
    this.addmenuService.editMenu(this.foodMenuID,this.addmenus).subscribe(data =>{
      this.gotoAddmenu();
    });
  }


}
