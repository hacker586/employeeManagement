import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagrikViewJansevakComponent } from './nagrik-view-jansevak.component';

describe('NagrikViewJansevakComponent', () => {
  let component: NagrikViewJansevakComponent;
  let fixture: ComponentFixture<NagrikViewJansevakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagrikViewJansevakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NagrikViewJansevakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
