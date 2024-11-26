import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationChartsComponent } from './participation-charts.component';

describe('ParticipationChartsComponent', () => {
  let component: ParticipationChartsComponent;
  let fixture: ComponentFixture<ParticipationChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
