import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonHomeComponent } from './addon-home.component';

describe('AddonHomeComponent', () => {
  let component: AddonHomeComponent;
  let fixture: ComponentFixture<AddonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
