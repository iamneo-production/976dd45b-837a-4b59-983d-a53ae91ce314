import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Addmenu } from 'src/app/class/addmenu';
import { Addon } from 'src/app/class/addon';
import { BookEvent } from 'src/app/class/bookevent';
import { Theme } from 'src/app/class/theme';
import { AddmenuserviceService } from 'src/app/services/addmenuservice.service';
import { AddonserviceService } from 'src/app/services/addonservice.service';
import { BookEventService } from 'src/app/services/bookevent.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  // eventId: number = 0;
  eventId: number;
  formData: BookEvent = new BookEvent();
  cost = '';
  totalCost: number;
  addOnCost: number;
  themeCost: number;
  currentPage = 1;
  themeData: Theme[] = [];
  // price
  lis: Addon[] = [];
  l: Array<number> = [];
  // foodmenu table checkbox
  foodlis: Addmenu[] = [];
  j: Array<number> = [];
  eventDuration='';
  //checkbox
  selectedFoodItemIds: number[] = [];
  selectedAddOnsIds: number[] = [];
  //common add/sub
  foodsum = 0; 
  addsum= 0;

  constructor(private router: Router, private bookEventService: BookEventService,
              private route: ActivatedRoute,
              private ser: AddonserviceService, private themeService: ThemeService,
              private foodService: AddmenuserviceService,private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.eventId = this.route.snapshot.params[`eventId`];
    this.bookEventService.viewEventbyId(this.eventId).subscribe(data => {
      this.formData = data;
      console.log(data);
      this.selectedFoodItemIds = this.formData.eventMenuId;
      this.selectedAddOnsIds = this.formData.addonId;
      console.log("Addon: "+this.formData.addonId);
      console.log("FoodMenu: "+this.formData.eventMenuId);
      console.log("cost: "+this.formData.eventCost);
      console.log("NV: "+this.formData.nonvegCount);
    });

    // addon price
    this.ser.getAddon().subscribe((data) => {
      this.lis = data;
      console.log(data);
      this.getSelectedFoodItems();
      console.log("Addon Selected: "+this.selectedAddOnsIds);
    });
    // themecost
    this.themeService.getTheme().subscribe((data) => {
      this.themeData = data;
      console.log(data);
      this.getThemecost();
      console.log(this.themeCost);
      this.totalCost = this.themeCost;
      console.log(this.totalCost);
      this.formData.eventCost = String(this.totalCost);
    });
    // foodmenu
    this.foodService.getMenu().subscribe((data) => {
      this.foodlis = data;
      console.log(data);
      this.getSelectedFoodItems();
      console.log("Food Selected: "+this.selectedFoodItemIds);
    });
  }
  getSelectedFoodItems(): void{
    this.foodlis.forEach(f => {
      f.selected = this.selectedFoodItemIds.includes(f.foodMenuID);
    });
    this.lis.forEach(addItem => {
      addItem.selected = this.selectedAddOnsIds.includes(addItem.addOnid);        
    });
  }
  getThemecost(): void {
    for (const theme of this.themeData) {
      if (this.formData.eventName === theme.themeName) {
        this.themeCost = theme.themeCost;
        break;
      }
    }

  }
  nextPage(): void {
    this.getSelectedFoodItems();
    if (this.currentPage < 2) {
      this.currentPage++;
    }
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  // update
  onSubmit(): void {
    this.foodmenutotal();
    this.addonstotal();
    this.bookEventService.editEvent(this.eventId, this.formData).subscribe(data => {
      this.gotoviewBook();
    });
  }
  gotoviewBook(): void {
    this.toastr.info(this.formData.eventName+' is updated successfully','Update Status' );
    this.router.navigate(['user/viewbookevent']);
  }
  // addon price
  // addon table
  Nothing(id: number): void {
    console.log('l list :'+this.l);
    console.log('Addon Clicked');
    if (!(this.l.includes(id))) {
      console.log(id);
      this.l.push(id);
      if (this.selectedAddOnsIds.includes(id)) {
        console.log("Add: "+id);
        console.log(`Item ID ${id} exists in the AddOn.`);
        console.log('l list in sub:'+this.l);
        this.l.splice(this.l.indexOf(id),1);
        this.selectedAddOnsIds.splice(this.selectedAddOnsIds.indexOf(id),1);
      }
      else{
      console.log('l list in add:'+this.l);
      }
    }
    else {
      console.log(id);
      this.l.splice(this.l.indexOf(id), 1);
      if (this.selectedAddOnsIds.includes(id)) {
        console.log('l list in add:'+this.l)
        console.log(`Item ID ${id} exists in the AddOn.Sub`);
      }
      else{
        console.log('l list in sub:'+this.l);
      }   
    }
    this.formData.eventCost = String(this.totalCost);
    this.formData.addonId = (this.l);
  }

  addonstotal(): any{
    this.l.push(...this.selectedAddOnsIds);
    console.log(this.l);
    for(var index of this.l){
      console.log(this.l.length);
      console.log(index);
      this.addsum=this.addsum + (Number(this.lis[index - 1].addAddonPrice));
  
      console.log("Addon sum: "+this.addsum);
      console.log(this.totalCost);
    }
  
    this.formData.eventCost = String(this.addsum+this.foodsum+this.totalCost);
    console.log("Total after adding Addon: "+this.formData.eventCost)
    this.formData.addonId = (this.l);
    }

  // foodmenu table
  FoodMenu(id: number): void {
    console.log('j list :'+this.j);
    console.log('F Clicked');
    if (!(this.j.includes(id))) {
      console.log(id);
      this.j.push(id);
      if (this.selectedFoodItemIds.includes(id)) {
        console.log("fd: "+id);
        console.log(`Item ID ${id} exists in the food menu.`);
        console.log('j list in sub:'+this.j);
        this.j.splice(this.j.indexOf(id),1);
        this.selectedFoodItemIds.splice(this.selectedFoodItemIds.indexOf(id),1);
      }
      else{
      console.log('j list in add:'+this.j);
      }
    }
    else {
      console.log(id);
      this.j.splice(this.j.indexOf(id), 1);
      if (this.selectedFoodItemIds.includes(id)) {
        console.log('j list in add:'+this.j)
        console.log(`Item ID ${id} exists in the food menu.Sub`);
      }
      else{
        console.log('j list in sub:'+this.j);
      }   
    }
    console.log(this.totalCost);
    this.formData.eventCost = String(this.totalCost);
    this.formData.eventMenuId = (this.j);
  }

  foodmenutotal(): any{
    this.j.push(...this.selectedFoodItemIds);
    console.log(this.j);
    for(var index of this.j){
      console.log(this.j.length);
  
      console.log(index);
      console.log(this.foodlis[index - 1].foodMenuType);
      console.log(this.foodlis[index - 1]);
      if(this.foodlis[index - 1].foodMenuType === "Veg"){
  
        this.foodsum=this.foodsum + (Number(this.foodlis[index - 1].foodMenuCost) * this.formData.vegCount);
    }
    else{
      console.log("nvC: "+this.formData.nonvegCount)
      this.foodsum=this.foodsum + (Number(this.foodlis[index - 1].foodMenuCost) * this.formData.nonvegCount);
    }
    console.log("Food sum: "+this.foodsum);
    console.log(this.totalCost);  
    console.log(this.formData.nonvegCount)
      }
  
      this.formData.eventCost = String(this.foodsum+this.addsum+this.totalCost);
      console.log("Total after adding Food: "+this.formData.eventCost)
    this.formData.eventMenuId = (this.j);
    }
  onChangeHour(): void
  {
    this.eventDuration=this.formData.eventFromTime+'-'+this.formData.eventToTime;
    this.formData.eventTime=this.eventDuration;
  }

}
