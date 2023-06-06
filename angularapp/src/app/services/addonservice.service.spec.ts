import { TestBed } from '@angular/core/testing';

import { AddonserviceService } from './addonservice.service';

describe('AddonserviceService', () => {
  let service: AddonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
