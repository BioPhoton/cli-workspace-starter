import {Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterComponent,
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor {

  value = 0;
  onChange;

  constructor() {
  }

  increment() {
    this.value++;
    this.onChange(this.value);
  }


  decrement() {
    this.value--;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
  }


}
