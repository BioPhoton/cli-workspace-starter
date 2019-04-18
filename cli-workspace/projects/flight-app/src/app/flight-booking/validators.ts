import {Injectable} from '@angular/core';
import {
  ValidationErrors,
  ValidatorFn
} from '@angular/forms/src/directives/validators';
import {FormControl, FormGroup} from '@angular/forms/src/model';
import {FlightService} from '@flight-workspace/flight-api';
import {Observable, of} from 'rxjs';
import {delay, mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {


  constructor(private fr: FlightService) {

  }

  isOffensive(isStrict = true): ValidatorFn {
    return (control: FormControl): Observable<ValidationErrors | null> => {
      let offensiveWords: string[] = ['React', 'Vue'];
      const val = isStrict ? control.value : control.value.toLowerCase();
      offensiveWords = isStrict ? offensiveWords : offensiveWords.map(v => v.toLowerCase())
      if (offensiveWords.includes(val)) {
        return this.fr.findById('1').pipe(mapTo(null));
      }
      return this.fr.findById('1')
        .pipe(mapTo({
            isOffensive: {
              offensiveWords,
              actualWord: control.value
            }
          })
        );
    }
  }

}




export function isDifferent(controlNames: string[]): ValidatorFn {
  return (group: FormGroup): ValidationErrors | null => {
   console.log('isDifferent', group.value);

    controlNames.map(controlName => group.get(controlName).value)

   .reduce((acc, v) => {
     acc[v] = !acc[v] ? 1 : acc[v] + 1;
     return acc;
   },{})



   if(group.value[controlNames[0]] === group.value[controlNames[1]]) {

   }


    return null;
  }
}








