import { TestBed } from '@angular/core/testing';

import { GrammagikService } from './grammagik.service';

describe('GrammagikService', () => {
  let service: GrammagikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrammagikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
