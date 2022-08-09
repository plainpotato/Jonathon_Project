import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkillComponent } from './portfolio-skill.component';

describe('PortfolioSkillComponent', () => {
  let component: PortfolioSkillComponent;
  let fixture: ComponentFixture<PortfolioSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
