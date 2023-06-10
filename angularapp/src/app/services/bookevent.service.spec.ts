import { TestBed } from '@angular/core/testing';

import { BookeventService } from './bookevent.service';

describe('BookeventService', () => {
  let service: BookeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
