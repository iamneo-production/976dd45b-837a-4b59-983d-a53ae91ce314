import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookEvent } from 'src/app/class/bookevent';
import { BookEventService } from 'src/app/services/bookevent.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit{
  // events: bookevent=new bookevent();
  events: BookEvent[] = [];
  constructor(private bookEventService: BookEventService, private router: Router) {}

  ngOnInit(): void {
    this.bookEventService.viewEvent().subscribe(data =>{
      this.events = data;
  });
}

updateEvent(eventId: number): any{
  this.router.navigate(['user/editEvent',eventId]);
}

deleteBookedEvent(eventId: number): any{

    this.bookEventService.deleteEvent(eventId).subscribe( data =>{
      this.ngOnInit();
      console.log('deleted');
    });

}
}
