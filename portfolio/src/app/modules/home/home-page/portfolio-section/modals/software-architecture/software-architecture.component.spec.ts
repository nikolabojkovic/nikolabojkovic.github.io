import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareArchitectureComponent } from './software-architecture.component';

describe('SoftwareArchitectureComponent', () => {
  let component: SoftwareArchitectureComponent;
  let fixture: ComponentFixture<SoftwareArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
