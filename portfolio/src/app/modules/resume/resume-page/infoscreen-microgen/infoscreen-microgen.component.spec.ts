import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoscreenMicrogenComponent } from './infoscreen-microgen.component';

describe('InfoscreenMicrogenComponent', () => {
  let component: InfoscreenMicrogenComponent;
  let fixture: ComponentFixture<InfoscreenMicrogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoscreenMicrogenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoscreenMicrogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
