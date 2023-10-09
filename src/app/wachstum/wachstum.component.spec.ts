import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WachstumComponent } from './wachstum.component';

describe('WachstumComponent', () => {
  let component: WachstumComponent;
  let fixture: ComponentFixture<WachstumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WachstumComponent]
    });
    fixture = TestBed.createComponent(WachstumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
