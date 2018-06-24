import {Component, OnInit} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-api';
import {LocalBasketService} from '../services/local-basked.service';

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

  constructor(
    private flightService: FlightService,
    private localBasketService: LocalBasketService,
  ) {
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

  saveBasket(): void {
    this.localBasketService.save(this.basket).then(
      _ => console.debug('successfully saved basket"'),
      err => console.error('error saving basket', err)
    )
  }

  loadBasket(): void {
    this.localBasketService.load().then(
      basket => { this.basket = basket; },
      err => console.error('error loading basket', err)
    );
  }

}
