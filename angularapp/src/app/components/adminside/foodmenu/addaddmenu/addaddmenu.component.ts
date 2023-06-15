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
    // calling the addMenu function which is present in the addmenuservice to make post request and to pass this data
    // If the status is success then will perform routing to addmenu component
    // And now newly added data would get updated in addmenu component
    this.addmenuService.addMenu(this.addmenu).subscribe( data => {      
      console.log(data);
      this.gotoAddmenu();
    },
    error => console.log(error));
  }

  gotoAddmenu(){
    // routing to add menu component
    this.router.navigate(['/admin/addmenu'])
  }

  onSubmit(){ 
    console.log(this.addmenu);
    this.saveAddMenu();
  }

}