import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';
import { LabelType, Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit{

  text1='';
  text2='';
  cost='';
  searchText!: string;
  themes: Theme[] =[];
  showFilteredThemes=0;
  count=1;
  t: any;
i: any;

  minValue=0;
  maxValue=50000;
  openform=0;
  city='all';
  n=0;


  floor=0;
  ceil=50000;
  showThemes=1;


  theme: Theme= new Theme();
  filteredThemes: any[]=[];
  options: Options = {

    translate: (value: number, label: LabelType): string => {
        switch (label) {
            default:
                return value+ ' INR';
        }
    }
};
  constructor(private router: Router,private eventservice: ThemeService, private data: DataService) { }

  ngOnInit(): void{
    this.getEvents();
  }


  private getEvents(): void{
    this.eventservice.getTheme().subscribe(data=>{
      console.log(data);
      this.themes = data;
    });

  }



  updateText(text1,text2,cost): void{
    this.data.updateData(text1,text2,cost);
  }



















findLocation(value: any): void{
  this.city=value;
    }

  filterThemes(): any{
    for(this.i=0;this.i<this.themes.length;this.i++){
      if(this.themes[this.i].themeDescription===this.city || this.city==='all' ){
      if(this.themes[this.i].themeCost >=this.minValue && this.themes[this.i].themeCost<=this.maxValue ){
        this.filteredThemes[this.n++]=this.themes[this.i];
        }
      }
    }
  }


  onClickOpenForm(): void{
    this.openform=1;
  }


  closeOpenedForm(): void
  {
    this.openform=0;


  }
  onClickCloseForm(): void{

    this.openform=0;
  }
  onClickCloseThemes(): void{
    this.n=0;
    this.filteredThemes=[];
    this.showThemes=0;
    this.filterThemes();
    this.showFilteredThemes=1;
  }
  CloseFilteredThemes(): void{
    this.showFilteredThemes=0;
    this.openform=0;
    this.showThemes=1;
  }
  onClickReset(): void{
    this.minValue=0;
    this.maxValue=50000;
    this.city='all';
    this.filteredThemes=[];
    this.n=0;
    this.filterThemes();
    alert('Filter resetted');
}
}
