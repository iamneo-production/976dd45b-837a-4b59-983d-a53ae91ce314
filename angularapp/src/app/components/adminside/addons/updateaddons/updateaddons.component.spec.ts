import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaddonsComponent } from './updateaddons.component';

describe('UpdateaddonsComponent', () => {
  let component: UpdateaddonsComponent;
  let fixture: ComponentFixture<UpdateaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
