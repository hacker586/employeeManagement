import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySetupComponent } from './family-setup.component';

describe('FamilySetupComponent', () => {
  let component: FamilySetupComponent;
  let fixture: ComponentFixture<FamilySetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilySetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
