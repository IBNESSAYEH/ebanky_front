import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIconComponent } from './delete-icon.component';

xdescribe('DeleteIconComponent', () => {
  let component: DeleteIconComponent;
  let fixture: ComponentFixture<DeleteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
