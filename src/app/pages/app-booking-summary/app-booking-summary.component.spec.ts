import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookingSummaryComponent } from './app-booking-summary.component';

describe('AppBookingSummaryComponent', () => {
  let component: AppBookingSummaryComponent;
  let fixture: ComponentFixture<AppBookingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBookingSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
