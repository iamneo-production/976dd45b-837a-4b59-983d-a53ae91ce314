import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ThemesComponent } from './themes.component';

describe('ThemesComponent', () => {
  let component: ThemesComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ThemesComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(ThemesComponent);
    component = fixture.componentInstance;
  });
  it('FE_themesTest', () => {
    expect(component).toBeTruthy();
  });
});