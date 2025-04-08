import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryFootprintComponent } from './industry-footprint.component';

describe('IndustryFootprintComponent', () => {
  let component: IndustryFootprintComponent;
  let fixture: ComponentFixture<IndustryFootprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryFootprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
