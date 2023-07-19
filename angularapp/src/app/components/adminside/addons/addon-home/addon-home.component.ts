import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Addon } from 'src/app/class/addon';
import { AddonserviceService } from 'src/app/services/addonservice.service';

@Component({
  selector: 'app-addon-home',
  templateUrl: './addon-home.component.html',
  styleUrls: ['./addon-home.component.css']
})
export class AddonHomeComponent implements OnInit {
  addons: Addon[] = [];

  private getAddons(): void{
    this.addservice.getAddon().subscribe(data => {
      console.log(data);
      this.addons = data;
    },
    (error) => {
        console.error(error);

    });
  }

  constructor(private router: Router, private addservice: AddonserviceService,private toastr: ToastrService) { }

  updateadd(addOnid: number): void{
    this.router.navigate(['admin/addon/updateaddons', addOnid]);
  }

  deleteadd(addOnid: number): void{
    this.addservice.deleteAddon(addOnid).subscribe(data => {
      console.log(data);
      this.getAddons();
    },
    (error) => {
      console.log(error.error.message);
      this.toastr.warning(error.error.message,'Addon Status');
      this.getAddons();
    });
  }

  ngOnInit(): void{
    this.getAddons();
  }

}
