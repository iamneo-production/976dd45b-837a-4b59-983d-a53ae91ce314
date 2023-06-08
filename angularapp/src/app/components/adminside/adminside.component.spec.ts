import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsideComponent } from './adminside.component';

describe('AdminsideComponent', () => {
  let component: AdminsideComponent;
  let fixture: ComponentFixture<AdminsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
