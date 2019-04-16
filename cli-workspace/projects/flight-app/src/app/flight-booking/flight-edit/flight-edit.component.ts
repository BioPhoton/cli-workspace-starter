import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Observable} from 'rxjs';
import {map, pluck, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
  id$: Observable<string>;
  showDetails$: Observable<string>;

  showWarning = false;
  flight: Flight;
  flight$: Observable<Flight>;

  constructor(
    private fr: FlightService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.id$ = this.route.params
      .pipe(
        map(params => params['id'])


      );
    this.showDetails$ = this.route.params
      .pipe(
        map(params => params['showDetails'])
      );


    this.flight$ = this.id$
      .pipe(
        switchMap(id => this.fr.findById(id))
      );

    this.route.data
      .pipe(
        map(data => data.flight)
      )
      .subscribe(
        flight => this.flight = flight
      )
  }

}
