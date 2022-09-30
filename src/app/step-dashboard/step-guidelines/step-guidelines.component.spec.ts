import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGuidelinesComponent } from './step-guidelines.component';

describe('StepGuidelinesComponent', () => {
  let component: StepGuidelinesComponent;
  let fixture: ComponentFixture<StepGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepGuidelinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
