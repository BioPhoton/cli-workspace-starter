import {Component, OnInit} from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {isDifferent, ValidationService} from '../validators';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: string;
  showWarning = false;

  editForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private vS: ValidationService) {

    this.editForm = this.fb.group({
      ruleName: ['my rule name', [], [] ],
      ruleName1: ['my rule name', [], [] ]
    }, {
      validators: [isDifferent(['ruleName', 'ruleName1'])]

    });
    console.log('editForm', this.editForm);
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

}
