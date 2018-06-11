import { Component } from '@angular/core';
import {TabbedPaneService} from '../services/tabbed-pane.service';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styles: []
})
export class PagerComponent {

  constructor(private tPService: TabbedPaneService) {
  }

  next(): void {
    this.tPService.next();
  }

  prev(): void {
    this.tPService.prev();
  }

}
