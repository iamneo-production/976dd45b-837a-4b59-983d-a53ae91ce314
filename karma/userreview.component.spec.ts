import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserReviewComponent } from './userreview.component';

describe('UserReviewComponent', () => {
  let component: UserReviewComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [UserReviewComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(UserReviewComponent);
    component = fixture.componentInstance;
  });
  it('FE_userReviewTest', () => {
    expect(component).toBeTruthy();
  });
});