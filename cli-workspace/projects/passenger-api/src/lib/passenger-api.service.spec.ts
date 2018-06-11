import { TestBed, inject } from '@angular/core/testing';

import { PassengerApiService } from './passenger-api.service';

describe('PassengerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassengerApiService]
    });
  });

  it('should be created', inject([PassengerApiService], (service: PassengerApiService) => {
    expect(service).toBeTruthy();
  }));
});
