import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagrikProfileViewComponent } from './nagrik-profile-view.component';

describe('NagrikProfileViewComponent', () => {
  let component: NagrikProfileViewComponent;
  let fixture: ComponentFixture<NagrikProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagrikProfileViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NagrikProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
