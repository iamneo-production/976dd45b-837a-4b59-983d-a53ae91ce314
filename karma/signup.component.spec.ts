import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [SignupComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
  });
  it('FE_signupTest', () => {
    expect(component).toBeTruthy();
  });
});