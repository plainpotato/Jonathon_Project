import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAboutMeComponent } from './portfolio-about-me.component';

describe('PortfolioAboutMeComponent', () => {
  let component: PortfolioAboutMeComponent;
  let fixture: ComponentFixture<PortfolioAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
