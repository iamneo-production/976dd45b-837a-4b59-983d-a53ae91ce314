import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Addmenu } from 'src/app/class/addmenu';
import { addon } from 'src/app/class/addon';
import { bookevent } from 'src/app/class/bookevent';
import { Theme } from 'src/app/class/theme';
import { AddmenuserviceService } from 'src/app/services/addmenuservice.service';
import { AddonserviceService } from 'src/app/services/addonservice.service';
import { BookEventService } from 'src/app/services/bookevent.service';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventId : number = 0;
  formData: bookevent= new bookevent();
  cost=''  
  totalCost:number=0;
  addOnCost:number=0;
  themeCost:number=0;
  currentPage = 1;
  
  themeData : Theme[]=[];
  //price
  lis : addon[]=[];
   l : Array<number> = []
   //foodmenu table checkbox
   foodlis : Addmenu[]=[];
   j : Array<number> = []

  constructor(private router:Router,private bookEventService: BookEventService,private route:ActivatedRoute,
    private ser: AddonserviceService, private data: DataService, private themeService: ThemeService, private foodService: AddmenuserviceService){

  }
  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['eventId'];
      this.bookEventService.viewEvent(this.eventId).subscribe(data => {
      this.formData = data;
    });
    
    //addon price
    this.ser.getList().subscribe((data)=>{
      this.lis = data;
      console.log(data);
     }
     ) 
     //themecost
     this.themeService.getAllTheme().subscribe((data)=>{
      this.themeData = data;
      console.log(data);
      this.getThemecost();
     console.log(this.themeCost);
     this.totalCost=this.themeCost;
     console.log(this.totalCost);
     this.formData.eventCost=String(this.totalCost);
     }
     
     ) 
     //foodmenu
     this.foodService.getAddMenu().subscribe((data)=>{
      this.foodlis = data;
      console.log(data);
     }
     ) 
     
  }

  getThemecost(){
    for(let index = 0; index < this.themeData.length; index++){
      if(this.formData.eventName==this.themeData[index].themeName){
        this.themeCost=this.themeData[index].themeCost;
      }
    }
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
  


  //update
  onSubmit(){
    this.bookEventService.editEvent(this.eventId,this.formData).subscribe(data =>{
      this.gotoviewBook();
    })
  }

  gotoviewBook(){
    this.router.navigate(['user/viewbookevent']);
  }

  //addon price
  //addon table

  Nothing(id:number){
    
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

    this.formData.eventCost=String(this.totalCost);
    this.formData.addonId=(this.l);
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
    console.log("F Clicked");
    if(!(this.j.includes(id))){
    console.log(id);
    this.j.push(id);
    this.addingFood(id);
    
    }
    else{
      console.log(id);
      this.subtract(id);
      this.j.splice(this.j.indexOf(id),1);
      
    }
    console.log(this.totalCost);
    
    this.formData.eventCost=String(this.totalCost);
    this.formData.eventMenuId=(this.j);
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