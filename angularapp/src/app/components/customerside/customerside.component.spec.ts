import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersideComponent } from './customerside.component';

describe('CustomersideComponent', () => {
  let component: CustomersideComponent;
  let fixture: ComponentFixture<CustomersideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
