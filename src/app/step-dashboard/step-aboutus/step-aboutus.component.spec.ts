import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAboutusComponent } from './step-aboutus.component';

describe('StepAboutusComponent', () => {
  let component: StepAboutusComponent;
  let fixture: ComponentFixture<StepAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
