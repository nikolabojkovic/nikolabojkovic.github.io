import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NulTienComponent } from './nul-tien.component';

describe('NulTienComponent', () => {
  let component: NulTienComponent;
  let fixture: ComponentFixture<NulTienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NulTienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NulTienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
