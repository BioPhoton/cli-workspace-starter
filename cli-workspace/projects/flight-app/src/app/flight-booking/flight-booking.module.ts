import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FlightBookingComponent} from './flight-booking.component';
import {FLIGHT_BOOKING_ROUTES} from './flight-booking.routes';
import {FlightCardComponent} from './flight-card/flight-card.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {FormControlStateComponent} from './form-control-state/form-control-state.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forChild(),
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent,
    FormControlStateComponent,
    CounterComponent
  ],
  providers: [],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule {
}
