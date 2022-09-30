import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingNormsComponent } from './funding-norms.component';

describe('FundingNormsComponent', () => {
  let component: FundingNormsComponent;
  let fixture: ComponentFixture<FundingNormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingNormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingNormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
