import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  PassengerState,
  selectAllPassengers
} from '../+state/passenger.selectors';
import {Observable} from 'rxjs/Rx';
import {Passenger} from '../+state/passenger.model';
import {AddPassengers} from '../+state/passenger.actions';

@Component({
  selector: 'passengers-list',
  templateUrl: './passengers-list.component.html',
  styleUrls: ['./passengers-list.component.css']
})
export class PassengersListComponent implements OnInit {


  constructor(private store: Store<PassengerState>) { }

  passengers$: Observable<Passenger[]>;

  ngOnInit() {
    this.store.dispatch(new AddPassengers({ passengers: [{id: '1', name: 'Max'}, {id:'2', name: 'Susi'}]}));
    this.passengers$ = this.store.select(selectAllPassengers);
  }

}
