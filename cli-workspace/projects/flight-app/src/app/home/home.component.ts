import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {State} from '../+state/index';
import {CounterIncrementAction} from '../+state/app.actions';
import * as fromApp from '../+state/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) {
    this.count$ = this.store.select(fromApp.getCount)
  }

  countUp() {
    const action = new CounterIncrementAction({incrementBy:1});
    this.store.dispatch(action);
  }

  needsLogin: boolean;
  _userName: string = '';

  ngOnInit() {
    this.route.params
      .pipe(pluck('needsLogin'))
      .subscribe(
        (v: boolean) => this.needsLogin = v
      )
  }

  get userName(): string {
    return this._userName;
  }

  login(): void {
    this._userName = 'Login will be implemented in another exercise!'
  }

  logout(): void {
    this._userName = '';
  }


}
