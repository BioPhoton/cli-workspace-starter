import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {pluck, switchMap} from 'rxjs/operators';
import {
  FlightBookingActionTypes,
  UpdateFlight
} from '../+state/flight-booking.actions';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: string;
  showWarning = false;

  editForm: FormGroup;
  errorMessage$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private flightService: FlightService,
    private store: Store<any>,
    private actions$: Actions
  ) {
    this.editForm = this.fb.group({
      'id': [],
      'from': [],
      'to': [],
      'date': []
    });

    this.errorMessage$ = this.actions$.pipe(
      ofType(FlightBookingActionTypes.FlightUpdateError),
      pluck('payload'), pluck('error')
    )

  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => this.flightService.findById(id))
      )
      .subscribe(flight => this.editForm.patchValue(flight));
  }

  save(flight: Flight) {
    const action = new UpdateFlight({flight: flight});
    this.store.dispatch(action);
  }

}
