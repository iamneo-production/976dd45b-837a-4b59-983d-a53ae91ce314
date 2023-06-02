import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeHomeComponent } from './theme-home.component';

describe('ThemeHomeComponent', () => {
  let component: ThemeHomeComponent;
  let fixture: ComponentFixture<ThemeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
