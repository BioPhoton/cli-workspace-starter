import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  value = 0;
  constructor() { }

  increment() {
    this.value++
  }


  decrement() {
    this.value--
  }

  ngOnInit() {
  }

}
