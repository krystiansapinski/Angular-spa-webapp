import { TestBed } from '@angular/core/testing';

import { ZadanierekrutacyjneService } from './zadanierekrutacyjne.service';

describe('ZadanierekrutacyjneService', () => {
  let service: ZadanierekrutacyjneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZadanierekrutacyjneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
