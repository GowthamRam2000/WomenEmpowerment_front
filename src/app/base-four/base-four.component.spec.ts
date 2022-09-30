import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFourComponent } from './base-four.component';

describe('BaseFourComponent', () => {
  let component: BaseFourComponent;
  let fixture: ComponentFixture<BaseFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
