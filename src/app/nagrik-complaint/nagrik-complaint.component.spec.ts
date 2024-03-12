import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagrikComplaintComponent } from './nagrik-complaint.component';

describe('NagrikComplaintComponent', () => {
  let component: NagrikComplaintComponent;
  let fixture: ComponentFixture<NagrikComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagrikComplaintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NagrikComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
