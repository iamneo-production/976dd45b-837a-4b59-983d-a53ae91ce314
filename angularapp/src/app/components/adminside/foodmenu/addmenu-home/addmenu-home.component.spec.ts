import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenuHomeComponent } from './addmenu-home.component';

describe('AddmenuHomeComponent', () => {
  let component: AddmenuHomeComponent;
  let fixture: ComponentFixture<AddmenuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmenuHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmenuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
