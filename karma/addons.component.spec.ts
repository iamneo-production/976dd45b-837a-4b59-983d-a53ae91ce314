import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddonsComponent } from './addons.component';

describe('AddonsComponent', () => {
  let component: AddonsComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AddonsComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AddonsComponent);
    component = fixture.componentInstance;
  });
  it('FE_addonsTest', () => {
    expect(component).toBeTruthy();
  });
});