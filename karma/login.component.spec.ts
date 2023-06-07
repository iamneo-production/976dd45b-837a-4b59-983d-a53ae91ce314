import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [LoginComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it('FE_loginTest', () => {
    expect(component).toBeTruthy();
  });
});