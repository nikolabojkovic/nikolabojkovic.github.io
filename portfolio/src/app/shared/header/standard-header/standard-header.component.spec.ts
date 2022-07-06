import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardHeaderComponent } from './standard-header.component';

describe('HeaderComponent', () => {
  let component: StandardHeaderComponent;
  let fixture: ComponentFixture<StandardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
