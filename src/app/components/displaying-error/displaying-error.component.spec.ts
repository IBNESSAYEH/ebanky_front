import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingErrorComponent } from './displaying-error.component';

xdescribe('DisplayingErrorComponent', () => {
  let component: DisplayingErrorComponent;
  let fixture: ComponentFixture<DisplayingErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayingErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayingErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
