import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class TabbedPaneService {
  public nextPage$ = new Subject<number>();

  next(): void {
    this.nextPage$.next(1);
  }

  prev(): void {
    this.nextPage$.next(-1);
  }
}
