import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSideBarComponent } from './step-side-bar.component';

describe('StepSideBarComponent', () => {
  let component: StepSideBarComponent;
  let fixture: ComponentFixture<StepSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
