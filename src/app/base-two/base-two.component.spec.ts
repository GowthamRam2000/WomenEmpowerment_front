import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTwoComponent } from './base-two.component';

describe('BaseTwoComponent', () => {
  let component: BaseTwoComponent;
  let fixture: ComponentFixture<BaseTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
