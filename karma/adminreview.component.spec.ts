import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminReviewComponent } from './adminreview.component';

describe('AdminReviewComponent', () => {
  let component: AdminReviewComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AdminReviewComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AdminReviewComponent);
    component = fixture.componentInstance;
  });
  it('FE_adminReviewTest', () => {
    expect(component).toBeTruthy();
  });
});