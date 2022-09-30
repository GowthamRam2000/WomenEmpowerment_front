import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoCriteriaComponent } from './ngo-criteria.component';

describe('NgoCriteriaComponent', () => {
  let component: NgoCriteriaComponent;
  let fixture: ComponentFixture<NgoCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoCriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
