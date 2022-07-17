import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioOverviewComponent } from './pages/portfolio-overview/portfolio-overview.component';

const routes: Routes = [
  {
    path: 'jonathon-portfolio',
    component: PortfolioOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
