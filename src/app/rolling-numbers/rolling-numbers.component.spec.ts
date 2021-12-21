import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingNumbersComponent } from './rolling-numbers.component';

describe('RollingNumbersComponent', () => {
  let component: RollingNumbersComponent;
  let fixture: ComponentFixture<RollingNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollingNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
