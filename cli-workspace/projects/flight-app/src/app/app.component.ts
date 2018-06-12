import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {State} from './+state/index';
import {CounterIncrementAction} from './+state/app.actions';
import * as fromApp from './+state/app.selectors';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = this.store.select(fromApp.getCount);
  }

  countUp() {
    const action = new CounterIncrementAction({incrementBy:1});
    console.log(action)
    this.store.dispatch(action);
  }
}

