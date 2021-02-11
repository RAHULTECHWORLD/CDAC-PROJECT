import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitAmountComponent } from './debit-amount.component';

describe('DebitAmountComponent', () => {
  let component: DebitAmountComponent;
  let fixture: ComponentFixture<DebitAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
