import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaddmenuComponent } from './updateaddmenu.component';

describe('UpdateaddmenuComponent', () => {
  let component: UpdateaddmenuComponent;
  let fixture: ComponentFixture<UpdateaddmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaddmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaddmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
