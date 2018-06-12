import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FlightBookingEffects } from './flight-booking.effects';

describe('FlightBookingService', () => {
  let actions$: Observable<any>;
  let effects: FlightBookingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlightBookingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FlightBookingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
