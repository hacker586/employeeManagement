import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagrikAnnouncementsComponent } from './nagrik-announcements.component';

describe('NagrikAnnouncementsComponent', () => {
  let component: NagrikAnnouncementsComponent;
  let fixture: ComponentFixture<NagrikAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagrikAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NagrikAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
