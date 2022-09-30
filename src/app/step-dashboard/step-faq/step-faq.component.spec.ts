import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFaqComponent } from './step-faq.component';

describe('StepFaqComponent', () => {
  let component: StepFaqComponent;
  let fixture: ComponentFixture<StepFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
