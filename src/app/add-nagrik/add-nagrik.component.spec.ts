import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNagrikComponent } from './add-nagrik.component';

describe('AddNagrikComponent', () => {
  let component: AddNagrikComponent;
  let fixture: ComponentFixture<AddNagrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNagrikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNagrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
