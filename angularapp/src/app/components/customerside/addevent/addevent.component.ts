import { Component, OnInit } from '@angular/core';
import { BookEventService } from '../../../services/bookevent.service';
import { AddonserviceService } from 'src/app/services/addonservice.service';
import { addon } from 'src/app/class/addon';
import { DataService } from 'src/app/services/data.service';
import { bookevent } from '../../../class/bookevent';
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';
import { Addmenu } from 'src/app/class/addmenu';
import { AddmenuserviceService } from 'src/app/services/addmenuservice.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  name='';
  loc='';
  cost='';
  themeCost='';
  totalCost:number=0;
  currentPage = 1;
  addOnCost:number=0;
  flag:boolean=false;
  
  bookevent: bookevent= new bookevent();
  theme:Theme= new Theme();
  
   //addon table checkbox
   lis : addon[]=[];
   l : Array<number> = []
   //foodmenu table checkbox
   foodlis : Addmenu[]=[];
   j : Array<number> = []
   

  constructor(private bookEventService: BookEventService,private ser: AddonserviceService,
    private data: DataService, private router: Router, private foodService: AddmenuserviceService) {}

  ngOnInit():void {
    //addon
    this.ser.getAddon().subscribe((data)=>{
      this.lis = data;
      console.log(data);
     }
     ) 
     //themName bind
     
     this.data.share1.subscribe(x => this.name = x);
     this.data.share2.subscribe(y => this.loc = y);
     this.data.share3.subscribe(z => this.cost = z);
     this.bookevent.eventName=this.name;
     this.bookevent.eventAddress=this.loc;
     this.themeCost=(this.cost);
     console.log(this.bookevent.eventName);
     console.log(this.bookevent.eventAddress);
     console.log(this.themeCost);
     this.totalCost=Number(this.themeCost);
     this.bookevent.eventCost=String(this.totalCost);

     //foodmenu
    this.foodService.getMenu().subscribe((data)=>{
      this.foodlis = data;
      console.log(data);
     }
     ) 
     //addonid/menuid
     
  }

  nextPage() {
    if (this.currentPage < 2) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  
  onSubmit(){
    console.log(this.bookevent);
    this.saveBookevent();
  }

  saveBookevent(){
    this.bookEventService.bookEvent(this.bookevent).subscribe( data => {
      console.log(data);
      this.gotoViewBook();
    },
    error => console.log(error));
  }

  gotoViewBook(){
    this.router.navigate(['/user/viewbookevent'])
  }


 //addon table

  Nothing(id:number){
    this.flag=true;
    console.log("Clicked");
    if(!(this.l.includes(id))){
    console.log(id);
    this.l.push(id);
    this.adding(id);
    
    }
    else{
      console.log(id);
      this.subtract(id);
      this.l.splice(this.l.indexOf(id),1);
      
    }
    console.log(this.totalCost);
    
    this.bookevent.eventCost=String(this.totalCost);
    this.bookevent.addonId=(this.l);
    console.log(this.l)
  }
  
  adding(i : number){

    for(let index = 0; index < this.lis.length; index++){
      if(this.lis[index].addOnid == i){
        console.log(index)
    console.log(this.lis[index].addAddonPrice);
   this.totalCost += (Number(this.lis[index].addAddonPrice));
      }
    }
    
     
  }

  subtract(i: number){
    for(let index = 0; index < this.lis.length; index++){
      if(this.lis[index].addOnid == i){
    console.log(index)
    console.log(this.lis[index].addAddonPrice);
   this.totalCost -= (Number(this.lis[index].addAddonPrice));
      }
    }
  
  }

  //foodmenu table
  FoodMenu(id:number){
    this.flag=true;
    console.log("F Clicked");
    if(!(this.j.includes(id))){
    console.log(id);
    this.j.push(id);
    this.addingFood(id);
    
    }
    else{
      console.log(id);
      this.subtractFood(id);
      this.j.splice(this.j.indexOf(id),1);
      
    }
    console.log(this.totalCost);
    
    this.bookevent.eventCost=String(this.totalCost);
    this.bookevent.eventMenuId=(this.j);
  }
  
  addingFood(i : number){

    for(let index = 0; index < this.foodlis.length; index++){
      if(this.foodlis[index].foodMenuID == i){
        console.log(index)
    console.log(this.foodlis[index].foodMenuCost);
   this.totalCost += (Number(this.foodlis[index].foodMenuCost));
      }
    }
    
     
  }

  subtractFood(i: number){
    for(let index = 0; index < this.foodlis.length; index++){
      if(this.foodlis[index].foodMenuID == i){
    console.log(index)
    console.log(this.foodlis[index].foodMenuCost);
   this.totalCost -= (Number(this.foodlis[index].foodMenuCost));
      }
    }
  
  }


}