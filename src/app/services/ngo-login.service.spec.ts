import { TestBed } from '@angular/core/testing';

import { NgoLoginService } from './ngo-login.service';

describe('NgoLoginService', () => {
  let service: NgoLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
