import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaMobileComponent } from './social-media-mobile.component';

describe('SocialMediaMobileComponent', () => {
  let component: SocialMediaMobileComponent;
  let fixture: ComponentFixture<SocialMediaMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
