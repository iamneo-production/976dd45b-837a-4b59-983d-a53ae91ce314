import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bookevent } from 'src/app/class/bookevent';
import { BookEventService } from 'src/app/services/bookevent.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class ViewbookingComponent {
  // events: bookevent=new bookevent();
  events: bookevent[] = [];
  constructor(private bookEventService: BookEventService, private router: Router) {}

  ngOnInit(): void {
    this.bookEventService.getList().subscribe(data =>{
      this.events = data;
  })
}

updateEvent(eventId:number){
  this.router.navigate(['user/editEvent',eventId]);
}

deleteBookedEvent(eventId: number){
  // if(window.confirm("You are going to delete the Booked Event !")){
    this.bookEventService.deleteEvent(eventId).subscribe( data =>{
      this.ngOnInit();
      console.log("deleted")
    })
//   }
}
}