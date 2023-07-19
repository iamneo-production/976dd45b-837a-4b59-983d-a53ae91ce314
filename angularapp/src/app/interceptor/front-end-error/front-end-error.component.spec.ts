import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndErrorComponent } from './front-end-error.component';

describe('FrontEndErrorComponent', () => {
  let component: FrontEndErrorComponent;
  let fixture: ComponentFixture<FrontEndErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
