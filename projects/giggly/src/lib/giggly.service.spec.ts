import { TestBed } from '@angular/core/testing';

import { GigglyService } from './giggly.service';

describe('GigglyService', () => {
  let service: GigglyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GigglyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
