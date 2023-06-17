import { Component, OnInit } from '@angular/core';
import { Addmenu } from '../../../class/addmenu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  addmenus: Addmenu[] = [];
  add(): void{
    this.router.navigate(['admin/addmenu/Addaddmenu']);
  }

  constructor(private router: Router){}

  ngOnInit(): void{}
}
