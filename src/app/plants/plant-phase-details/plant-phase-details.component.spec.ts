import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPhaseDetailsComponent } from './plant-phase-details.component';

describe('PlantPhaseDetailsComponent', () => {
  let component: PlantPhaseDetailsComponent;
  let fixture: ComponentFixture<PlantPhaseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantPhaseDetailsComponent]
    });
    fixture = TestBed.createComponent(PlantPhaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
