import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctormastersComponent } from './doctormasters.component';

describe('DoctormastersComponent', () => {
  let component: DoctormastersComponent;
  let fixture: ComponentFixture<DoctormastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctormastersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctormastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
