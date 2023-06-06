import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreviewComponent } from './userreview.component';

describe('UserreviewComponent', () => {
  let component: UserreviewComponent;
  let fixture: ComponentFixture<UserreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
