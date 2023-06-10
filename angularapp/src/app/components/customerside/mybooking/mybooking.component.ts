import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bookevent } from 'src/app/class/bookevent';
import { BookEventService } from 'src/app/services/bookevent.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent {
  // events: bookevent=new bookevent();
  events: bookevent[] = [];
  constructor(private bookEventService: BookEventService, private router: Router) {}

  ngOnInit(): void {
    this.bookEventService.viewEvent().subscribe(data =>{
      this.events = data;
  })
}

updateEvent(eventId:number){
  this.router.navigate(['user/editEvent',eventId]);
}

deleteBookedEvent(eventId: number){

    this.bookEventService.deleteEvent(eventId).subscribe( data =>{
      this.ngOnInit();
      console.log("deleted")
    })

}
}