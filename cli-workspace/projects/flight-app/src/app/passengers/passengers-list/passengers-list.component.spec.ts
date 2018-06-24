import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersListComponent } from './passengers-list.component';

describe('PassengersListComponent', () => {
  let component: PassengersListComponent;
  let fixture: ComponentFixture<PassengersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
