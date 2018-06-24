import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PassengersListComponent} from './passengers-list/passengers-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromPassenger from './+state/passenger.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('passenger', fromPassenger.reducer)
  ],
  declarations: [PassengersListComponent],
  exports: [PassengersListComponent]
})
export class PassengersModule {
}
