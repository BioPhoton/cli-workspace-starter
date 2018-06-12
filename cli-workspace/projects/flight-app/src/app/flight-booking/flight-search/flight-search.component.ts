import {Component, OnInit} from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Store} from '@ngrx/store';
import * as fromFlightBooking from '../+state/flight-booking.selector';
import {
  FlightBookingActions, FlightBookingActionTypes,
  FlightsLoaded
} from '../+state/flight-booking.actions';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  flights$: Observable<Flight[]>;

  constructor(
    private flightService: FlightService,
  private store: Store<any>) {
    this.flights$ = this.store.select(fromFlightBooking.getFlights)
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .find(this.from, this.to, this.urgent)
      .subscribe(
        flights => {
          const action: FlightsLoaded = {
            type: FlightBookingActionTypes.FlightsLoaded,
            payload: {flights: flights}
          };
          this.store.dispatch(action);
        }
      );
  }

  delay(): void {
    this.flightService.delay();
  }

}
