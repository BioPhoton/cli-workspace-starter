import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
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
