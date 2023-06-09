import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookingComponent } from './mybooking.component';

describe('MybookingComponent', () => {
  let component: MybookingComponent;
  let fixture: ComponentFixture<MybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
