import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatethemeComponent } from './updatetheme.component';

describe('UpdatethemeComponent', () => {
  let component: UpdatethemeComponent;
  let fixture: ComponentFixture<UpdatethemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatethemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatethemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
