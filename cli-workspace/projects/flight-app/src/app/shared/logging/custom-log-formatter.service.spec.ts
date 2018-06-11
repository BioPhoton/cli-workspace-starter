import { TestBed, inject } from '@angular/core/testing';

import { CustomLogFormatterService } from './custom-log-formatter.service';

describe('CustomLogFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLogFormatterService]
    });
  });

  it('should be created', inject([CustomLogFormatterService], (service: CustomLogFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
