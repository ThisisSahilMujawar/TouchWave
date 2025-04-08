import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStrategyComponent } from './business-strategy.component';

describe('BusinessStrategyComponent', () => {
  let component: BusinessStrategyComponent;
  let fixture: ComponentFixture<BusinessStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessStrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
