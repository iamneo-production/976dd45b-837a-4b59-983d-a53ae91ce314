import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FoodMenuComponent } from './foodmenu.component';

describe('FoodMenuComponent', () => {
  let component: FoodMenuComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [FoodMenuComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(FoodMenuComponent);
    component = fixture.componentInstance;
  });
  it('FE_foodMenuTest', () => {
    expect(component).toBeTruthy();
  });
});