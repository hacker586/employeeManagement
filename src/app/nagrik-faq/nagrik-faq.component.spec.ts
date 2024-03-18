import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagrikFAQComponent } from './nagrik-faq.component';

describe('NagrikFAQComponent', () => {
  let component: NagrikFAQComponent;
  let fixture: ComponentFixture<NagrikFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagrikFAQComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NagrikFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
