import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XDividerComponent } from './x-divider.component';

describe('XDividerComponent', () => {
  let component: XDividerComponent;
  let fixture: ComponentFixture<XDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
