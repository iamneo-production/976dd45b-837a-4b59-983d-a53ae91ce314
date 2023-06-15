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
  searchText!:string;
  themes:Theme[]=[];
  

  private getEvents(){
    this.eventservice.getTheme().subscribe(data=>{
      console.log(data);
      this.themes = data;
    });
  }

  constructor(private router:Router,private eventservice:ThemeService, private data: DataService) { }

  ngOnInit(): void{
    this.getEvents()
  }

  updateText(text1,text2,cost){
    this.data.updateData(text1,text2,cost);
  }


  //filter

  showFilteredThemes=0;
  count=1;
  t:any;
  city="all";
  n=0;
  showThemes=1;
  filteredThemes:any[]=[];
  theme:Theme= new Theme();


  


  minValue:number=0;
  maxValue:number=50000;
  openform=0;
  options: Options = {  
    floor: 0,  
    ceil: 50000,  
    translate: (value: number, label: LabelType): string => {  
        switch (label) {  
            default:  
                return value+ " INR";  
        }  
    }  
};   


findLocation(value:any){
  this.city=value;
    }

  filterThemes(){
    for(let i=0;i<this.themes.length;i++){
      if(this.themes[i].themeDescription==this.city || this.city=="all" ){
      if(this.themes[i].themeCost >=this.minValue && this.themes[i].themeCost<=this.maxValue ){
        this.filteredThemes[this.n++]=this.themes[i];
        }
      }
    }
  }
  onClickOpenForm(){
    this.openform=1;
  }
  closeOpenedForm(){
    this.openform=0;
    
    
  }
  onClickCloseForm(){
    
    this.openform=0;
  }
  onClickCloseThemes(){
    this.n=0;
    this.filteredThemes=[];
    this.showThemes=0;
    this.filterThemes();
    this.showFilteredThemes=1;
  }
  CloseFilteredThemes(){
    this.showFilteredThemes=0;
    this.openform=0;
    this.showThemes=1;
  }
  onClickReset(){
    this.minValue=0;
    this.maxValue=50000;
    this.city="all";
    this.filteredThemes=[];
    this.n=0;
    this.filterThemes();
    alert("Filter resetted");
  }

}