import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountsComponent } from './card-accounts.component';

describe('CardAccountsComponent', () => {
  let component: CardAccountsComponent;
  let fixture: ComponentFixture<CardAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
