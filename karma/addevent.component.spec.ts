import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddEventComponent } from './AddEvent.component';

describe('AddEventComponent', () => {
  let component: AddEventComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AddEventComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
  });
  it('FE_addEventTest', () => {
    expect(component).toBeTruthy();
  });
});