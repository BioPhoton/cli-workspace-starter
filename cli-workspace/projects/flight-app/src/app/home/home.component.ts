import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {SwPush, SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private swUpdate: SwUpdate,
              private swPush: SwPush
  ) {
    this.setupUpdates();
  }

  setupUpdates() {
    this.swUpdate.available.subscribe(u => {
      this.swUpdate.activateUpdate().then(e => {
        this.snackBar.open("App updated -- please reload!", "OK");
      });
    });

    this.swUpdate.checkForUpdate();
  }

  setupPush() {

    const key = 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE';

    this.swPush.requestSubscription({
      serverPublicKey: key
    })
      .then(sub => {
          console.debug('Push Subscription', JSON.stringify(sub) );
        },
        err => {
          console.error('error registering for push', err);
        });

    this.swPush.messages.subscribe(push => {
      console.debug('received push message', push);
    });
  }


  needsLogin: boolean;
  _userName: string = '';

  ngOnInit() {
    this.needsLogin = !!this.route.snapshot.params['needsLogin'];
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
