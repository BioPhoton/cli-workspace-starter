import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerApiComponent } from './passenger-api.component';

describe('PassengerApiComponent', () => {
  let component: PassengerApiComponent;
  let fixture: ComponentFixture<PassengerApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
