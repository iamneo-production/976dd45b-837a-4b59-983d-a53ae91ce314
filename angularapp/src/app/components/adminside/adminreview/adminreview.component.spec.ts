import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreviewComponent } from './adminreview.component';

describe('AdminreviewComponent', () => {
  let component: AdminreviewComponent;
  let fixture: ComponentFixture<AdminreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
