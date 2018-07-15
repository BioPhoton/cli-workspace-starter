import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/internal/operators';
import {AuthService} from '../shared/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private authService: AuthService) {
  }

  needsLogin: boolean;
  _userName: string = '';

  ngOnInit() {
    this.route.params.pipe(
      pluck('needsLogin')
    ).subscribe(
      (v:boolean) => this.needsLogin = v
    );
  }
  get userName(): string {
    return this.authService.userName;
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

}
