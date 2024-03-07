import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJanSevakComponent } from './add-jan-sevak.component';

describe('AddJanSevakComponent', () => {
  let component: AddJanSevakComponent;
  let fixture: ComponentFixture<AddJanSevakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJanSevakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddJanSevakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
