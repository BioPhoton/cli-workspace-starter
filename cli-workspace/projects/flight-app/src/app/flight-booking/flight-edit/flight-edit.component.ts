import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Store} from '@ngrx/store';
import {pluck, switchMap} from 'rxjs/operators';
import {State as FlightBookingState} from '../+state/flight-booking.reducer';
import {
  FlightBookingActionTypes, FlightUpdateError,
  UpdateFlight
} from '../+state/flight-booking.actions';
import {Actions} from '@ngrx/effects';


@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: string;
  showWarning = false;

  editForm: FormGroup;
  errorMessage: string;

  constructor(private actions$ : Actions, private store: Store<any>, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private flightService: FlightService) {
    this.editForm = this.fb.group({
      'id': [],
      'from': [],
      'to': [],
      'date': []
    });

    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => this.flightService.findById(id))
      )
      .subscribe(flight => this.editForm.patchValue(flight));

    // handling error message
    actions$.ofType(FlightBookingActionTypes.FlightUpdateError)
      .pipe(pluck('payload'),pluck('error'))
      .subscribe(e => this.showError(e));

    // handling navigation
    actions$.ofType(FlightBookingActionTypes.FlightUpdateSuccess)
      .subscribe(() => {
        this.router.navigate(['flight-booking/flight-search'])
      });

  }

  showError(error) {
    this.errorMessage = error;
  }

  save(flight: Flight) {
    const action: UpdateFlight = {
      type: FlightBookingActionTypes.UpdateFlight,
      payload: {flight: flight}
    }
    this.store.dispatch(action);
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }
}
