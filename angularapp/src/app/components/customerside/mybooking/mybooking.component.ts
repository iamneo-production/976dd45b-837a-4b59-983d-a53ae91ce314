import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookEvent } from 'src/app/class/bookevent';
import { User } from 'src/app/class/user';
import { BookEventService } from 'src/app/services/bookevent.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit{
  // events: bookevent=new bookevent();
  events?: BookEvent[];
  userid= 0;
  cusId='';
  id= 0;
  customer: User = new User();
  constructor(private bookEventService: BookEventService,
              private router: Router,private route: ActivatedRoute,
              private data: DataService) {}

  ngOnInit(): void {
  this.data.share4.subscribe(x => this.cusId = x);
  console.log(this.cusId);
  this.userid=Number(this.cusId);

  this.bookEventService.getcustomerByuserId(this.userid).subscribe(data =>
    {
      this.customer = data;
      this.id  = this.customer.userId;
      console.log(this.id);

      this.bookEventService.getBookingById(this.id).subscribe(data2 => {
        this.events = data2;
        console.log(this.events);
      });

    }, error => console.log(error)
    );
  }

  updateEvent(eventId: number): any{
    this.router.navigate(['user/editEvent',eventId]);
  }


  deleteBookedEvent(eventId: number): any{
    if(window.confirm('You are going to delete the Booked Event !')){
      this.bookEventService.deleteEvent(eventId).subscribe( data =>{
        this.ngOnInit();
        console.log('deleted');
      });
    }
  }
}

