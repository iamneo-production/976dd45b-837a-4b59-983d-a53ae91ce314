import { Component, OnInit } from '@angular/core';
import { BookEventService } from '../../../services/bookevent.service';
import { AddonserviceService } from 'src/app/services/addonservice.service';
import { Addon } from 'src/app/class/addon';
import { DataService } from 'src/app/services/data.service';
import { BookEvent } from '../../../class/bookevent';
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';
import { Addmenu } from 'src/app/class/addmenu';
import { AddmenuserviceService } from 'src/app/services/addmenuservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  name = '';
  loc = '';
  cost = '';
  themeCost = '';
  totalCost = 0;
  currentPage = 1;
  addOnCost = 0;
  flag =false;
  eventDuration='';
  bookevent: BookEvent = new BookEvent();
  theme: Theme = new Theme();
  userid= 0;
  cusId='';

  // addon table checkbox
  lis: Addon[] = [];
  l: Array<number> = [];
  // foodmenu table checkbox
  foodlis: Addmenu[] = [];
  j: Array<number> = [];
  //veg/non-veg
  vegCount = 0;
  nonVegCount = 0;
  //common add/sub
  foodsum = 0; 
  addsum=0;


  constructor(private bookEventService: BookEventService,
              private ser: AddonserviceService, private toastr: ToastrService,
              private data: DataService,
              private router: Router,
              private foodService: AddmenuserviceService) {}

  ngOnInit(): void {
    this.data.share4.subscribe(x => this.cusId = x);
    console.log(this.cusId);
    this.userid=Number(this.cusId);
    console.log(this.userid);
    this.bookevent.userId=this.userid;
    // addon
    this.ser.getAddon().subscribe((data) => {
      this.lis = data;
      console.log(data);
    });
    // themName bind

    this.data.share1.subscribe(x => this.name = x);
    this.data.share2.subscribe(y => this.loc = y);
    this.data.share3.subscribe(z => this.cost = z);
    this.bookevent.eventName = this.name;
    this.bookevent.eventAddress = this.loc;
    this.themeCost = (this.cost);
    console.log(this.bookevent.eventName);
    console.log(this.bookevent.eventAddress);
    console.log(this.themeCost);
    this.totalCost = Number(this.themeCost);
    this.bookevent.eventCost=String(this.totalCost);


    this.foodService.getMenu().subscribe((data) => {
      this.foodlis = data;
      console.log(data);
    });
    // addonid/menuid
  }

  nextPage(): void {
    if (this.currentPage < 2) {
      this.currentPage++;
    }
  }

  previousPage(): void {


    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  onSubmit(): void {
    console.log(this.bookevent);
    this.foodmenutotal();
    this.addonstotal();
    this.saveBookevent();
  }

  saveBookevent(): void {
    this.toastr.success('New Event is booked successfully!','Booking Status' );
    this.bookEventService.bookEvent(this.bookevent).subscribe( data => {
      console.log(data);
      this.gotoViewBook();
    },
    error => console.log(error));
  }

  gotoViewBook(): void {
    this.router.navigate(['/user/viewbookevent']);
  }

 // addon table

  Nothing(id: number): void {
    this.flag=true;
    console.log('Clicked');
    if(!(this.l.includes(id))){
      console.log(id);
      this.l.push(id);
    }
    else{
      console.log(id);
      this.l.splice(this.l.indexOf(id), 1);
    }
    console.log(this.totalCost);

    this.bookevent.eventCost = String(this.totalCost);
    this.bookevent.addonId=(this.l);
    console.log(this.l);
  }

  addonstotal(): any{
    console.log(this.l);
    for(var index of this.l){
      console.log(this.l.length);
      console.log(index);
      this.addsum=this.addsum + (Number(this.lis[index - 1].addAddonPrice));
    
      console.log("Addon sum: "+this.addsum);
      console.log(this.totalCost);
    }
    
    this.bookevent.eventCost = String(this.addsum+this.foodsum+this.totalCost);
    console.log("Total after adding Addon: "+this.bookevent.eventCost);
    this.bookevent.addonId = (this.l);
    }

  // foodmenu table
  FoodMenu(id: number): void {
    this.flag = true;
    console.log('F Clicked');
    if(!(this.j.includes(id))){
      console.log(id);
      this.j.push(id);
    }

    else{
      console.log(id);
      this.j.splice(this.j.indexOf(id),1);
    }
    console.log(this.totalCost);

    this.bookevent.eventCost = String(this.totalCost);
    this.bookevent.eventMenuId = (this.j);
  }

  foodmenutotal(): any{
    console.log(this.j);
    for(var index of this.j){
      console.log(this.j.length);

      console.log(index);
      console.log(this.foodlis[index - 1].foodMenuType);
      console.log(this.foodlis[index - 1]);
      if(this.foodlis[index - 1].foodMenuType === "Veg"){

        this.foodsum=this.foodsum + (Number(this.foodlis[index - 1].foodMenuCost) * this.bookevent.vegCount);
    }
    else{
      this.foodsum=this.foodsum + (Number(this.foodlis[index - 1].foodMenuCost) * this.bookevent.nonvegCount);
    }
    console.log(this.foodsum);
    console.log(this.totalCost);  
    console.log(this.bookevent.nonvegCount);
      }

      this.bookevent.eventCost = String(this.foodsum+this.addsum+this.totalCost);
    this.bookevent.eventMenuId = (this.j);
    console.log("Total after adding Food: "+this.bookevent.eventCost)
    }

  onChangeHour(): void
{
    this.eventDuration=this.bookevent.eventFromTime+'-'+this.bookevent.eventToTime;
    this.bookevent.eventTime=this.eventDuration;
}


}
