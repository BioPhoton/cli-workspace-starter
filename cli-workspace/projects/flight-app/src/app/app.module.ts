import {HttpClientModule} from '@angular/common/http';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlightApiModule} from '@flight-workspace/flight-api';

import {AppComponent} from './app.component';
import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app.routes';
import {BasketComponent} from './basket/basket.component';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,

    FlightApiModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
