import { TestBed } from '@angular/core/testing';

import { ErrorInterceptorInterceptor } from './error-interceptor.interceptor';

describe('ErrorInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorInterceptorInterceptor = TestBed.inject(ErrorInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
