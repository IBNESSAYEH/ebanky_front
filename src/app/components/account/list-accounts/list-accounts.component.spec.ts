import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountsComponent } from './list-accounts.component';

xdescribe('ListAccountsComponent', () => {
  let component: ListAccountsComponent;
  let fixture: ComponentFixture<ListAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
