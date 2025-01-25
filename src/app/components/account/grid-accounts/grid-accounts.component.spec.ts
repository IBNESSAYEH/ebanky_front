import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAccountsComponent } from './grid-accounts.component';

xdescribe('GridAccountsComponent', () => {
  let component: GridAccountsComponent;
  let fixture: ComponentFixture<GridAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
