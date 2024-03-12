import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagrikHomeComponent } from './nagrik-home.component';

describe('NagrikHomeComponent', () => {
  let component: NagrikHomeComponent;
  let fixture: ComponentFixture<NagrikHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagrikHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NagrikHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
