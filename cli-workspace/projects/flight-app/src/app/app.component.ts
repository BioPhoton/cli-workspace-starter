import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {State} from './+state/index';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = this.store.select(state => state.app.count);
  }
}

