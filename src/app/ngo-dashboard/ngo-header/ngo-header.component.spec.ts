import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoHeaderComponent } from './ngo-header.component';

describe('NgoHeaderComponent', () => {
  let component: NgoHeaderComponent;
  let fixture: ComponentFixture<NgoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
