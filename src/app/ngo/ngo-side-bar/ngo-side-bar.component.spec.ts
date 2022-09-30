import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoSideBarComponent } from './ngo-side-bar.component';

describe('NgoSideBarComponent', () => {
  let component: NgoSideBarComponent;
  let fixture: ComponentFixture<NgoSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
