import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelisaleComponent } from './intelisale.component';

describe('IntelisaleComponent', () => {
  let component: IntelisaleComponent;
  let fixture: ComponentFixture<IntelisaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelisaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelisaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
