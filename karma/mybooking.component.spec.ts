import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MyBookingComponent } from './mybooking.component';

describe('MyBookingComponent', () => {
  let component: MyBookingComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [MyBookingComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(MyBookingComponent);
    component = fixture.componentInstance;
  });
  it('FE_myBookingTest', () => {
    expect(component).toBeTruthy();
  });
});