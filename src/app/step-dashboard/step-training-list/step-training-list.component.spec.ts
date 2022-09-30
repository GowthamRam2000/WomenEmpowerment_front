import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTrainingListComponent } from './step-training-list.component';

describe('StepTrainingListComponent', () => {
  let component: StepTrainingListComponent;
  let fixture: ComponentFixture<StepTrainingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTrainingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTrainingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
