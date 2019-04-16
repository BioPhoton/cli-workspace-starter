import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightResolver implements Resolve<Flight>{

  constructor( private fr: FlightService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Flight> | Promise<Flight> | Flight {
    return this.fr.findById(route.params['id']);
  }
}
