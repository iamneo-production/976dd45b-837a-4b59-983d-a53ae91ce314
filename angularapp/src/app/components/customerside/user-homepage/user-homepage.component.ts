import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';
import { DataService } from 'src/app/services/data.service';
import { UserThemeHomeService } from 'src/app/services/user-theme-home.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit{
  
  text1='';
  text2='';
  cost='';
  searchText!:string;
  themes:Theme[]=[];
  private getEvents()
  {
    this.eventservice.getAllThemes().subscribe(data=>{
      console.log(data);
      this.themes = data;
    });
  }

  constructor(private router:Router,private eventservice:UserThemeHomeService, private data: DataService)
   {

   }

  ngOnInit(): void
  {
    this.getEvents()
  }

  updateText(text1,text2,cost)
  {
    this.data.updateData(text1,text2,cost);
  }
}