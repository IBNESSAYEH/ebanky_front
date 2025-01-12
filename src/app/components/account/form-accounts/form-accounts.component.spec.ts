import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccountsComponent } from './form-accounts.component';

describe('FormAccountsComponent', () => {
  let component: FormAccountsComponent;
  let fixture: ComponentFixture<FormAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
