import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookingComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [BookingComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
  });
  it('FE_bookingTest', () => {
    expect(component).toBeTruthy();
  });
});