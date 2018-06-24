import {Component, OnInit} from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import {
  FlightBookingActionTypes,
  LoadFlights
} from '../+state/flight-booking.actions';
import * as fromFlightBooking from '../+state/flight-booking.selector';

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
  isFlightsPending$ : Observable<boolean>;

  constructor(
    private flightService: FlightService,
    private store: Store<any>
  ) {
    this.flights$ = this.store.select(fromFlightBooking.getFlights);
    this.isFlightsPending$ = this.store.select(fromFlightBooking.getIsFlightsPending);
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    const action: LoadFlights = {
      type: FlightBookingActionTypes.LoadFlights,
      payload: {from: this.from, to: this.to}
    };
    this.store.dispatch(action);
  }

  delay(): void {
    this.flightService.delay();
  }

}
