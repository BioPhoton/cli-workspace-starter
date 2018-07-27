import {Component, OnInit} from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromFlightBooking from '../+state/flight-booking.selectors'
import {LoadFlights} from '../+state/flight-booking.actions';

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

  flights$: Observable<Flight[]>;
  isFlightsPending$: Observable<boolean>;

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightService: FlightService,
    private store: Store<any>) {
    this.flights$ = this.store.pipe(select(fromFlightBooking.getFlights));
    this.isFlightsPending$ = this.store.pipe(select(fromFlightBooking.getIsFlightsPending))
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    const action = new LoadFlights({from: this.from, to: this.to});
    this.store.dispatch(action);
  }

  delay(): void {
    this.flightService.delay();
  }

}
