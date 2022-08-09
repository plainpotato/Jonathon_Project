import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAwardComponent } from './portfolio-award.component';

describe('PortfolioAwardComponent', () => {
  let component: PortfolioAwardComponent;
  let fixture: ComponentFixture<PortfolioAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
