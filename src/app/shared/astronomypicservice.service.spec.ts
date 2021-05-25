import { TestBed } from '@angular/core/testing';

import { AstronomypicserviceService } from './astronomypicservice.service';

describe('AstronomypicserviceService', () => {
  let service: AstronomypicserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstronomypicserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
