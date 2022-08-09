import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioOverviewComponent } from './pages/portfolio-overview/portfolio-overview.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortfolioAboutMeComponent } from './pages/portfolio-about-me/portfolio-about-me.component';
import { PortfolioEduExpComponent } from './pages/portfolio-edu-exp/portfolio-edu-exp.component';
import { PortfolioAwardComponent } from './pages/portfolio-award/portfolio-award.component';
import { PortfolioSkillComponent } from './pages/portfolio-skill/portfolio-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioOverviewComponent,
    PortfolioAboutMeComponent,
    PortfolioEduExpComponent,
    PortfolioAwardComponent,
    PortfolioSkillComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
