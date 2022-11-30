import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrionInovationComponent } from './orion-inovation.component';

describe('OrionInovationComponent', () => {
  let component: OrionInovationComponent;
  let fixture: ComponentFixture<OrionInovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrionInovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrionInovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
