import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRegistration2Component } from './step-registration2.component';

describe('StepRegistration2Component', () => {
  let component: StepRegistration2Component;
  let fixture: ComponentFixture<StepRegistration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepRegistration2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepRegistration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
