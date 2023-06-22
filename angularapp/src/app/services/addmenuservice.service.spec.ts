import { TestBed } from '@angular/core/testing';

import { AddmenuserviceService } from './addmenuservice.service';

describe('AddmenuserviceService', () => {
  let service: AddmenuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmenuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
