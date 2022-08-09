import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEduExpComponent } from './portfolio-edu-exp.component';

describe('PortfolioEduExpComponent', () => {
  let component: PortfolioEduExpComponent;
  let fixture: ComponentFixture<PortfolioEduExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioEduExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioEduExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
