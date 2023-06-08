import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaddonsComponent } from './addaddons.component';

describe('AddaddonsComponent', () => {
  let component: AddaddonsComponent;
  let fixture: ComponentFixture<AddaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
