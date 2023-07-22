import { Component, OnInit } from '@angular/core';
import { Addmenu } from '../../../../class/addmenu';
import { AddmenuserviceService } from '../../../../services/addmenuservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addaddmenu',
  templateUrl: './addaddmenu.component.html',
  styleUrls: ['./addaddmenu.component.css']
})
export class AddaddmenuComponent implements OnInit{

  addmenu: Addmenu = new Addmenu();
  constructor(private addmenuService: AddmenuserviceService, private router: Router,private toastr: ToastrService)
  {

  }
  ngOnInit(): void{}
  saveAddMenu(): void{
    // calling the addMenu function which is present in the addmenu service to make post request and to pass this data
    // If the status is success,then will perform routing operation to addmenu component
    // And now newly added data would get updated in foodmenu component
    this.toastr.success('New Food Menu is added successfully!','Addon Status' );
    this.addmenuService.addMenu(this.addmenu).subscribe(data => {
    console.log(data);
    this.gotoAddmenu();
    },
    error => console.log(error));
  }

  gotoAddmenu(): void{
    // routing to food menu component
    this.router.navigate(['/admin/addmenu']);
  }
  onSubmit(val: string): void{
    if(val==='Veg'){
      this.addmenu.foodMenuType='Veg';
    }
    else if(val==='Non-Veg'){
      this.addmenu.foodMenuType='Non-Veg';
    }
    console.log(this.addmenu);
    // here addmenu contains the data which we entered in the form from front end
    this.saveAddMenu();
  }

  back(): any{
  
    this.router.navigate(['admin/addmenu']);
  }

}