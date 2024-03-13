import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJansevakComponent } from './view-jansevak.component';

describe('ViewJansevakComponent', () => {
  let component: ViewJansevakComponent;
  let fixture: ComponentFixture<ViewJansevakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewJansevakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewJansevakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
