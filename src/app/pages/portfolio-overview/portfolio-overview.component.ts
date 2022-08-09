import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.scss'],
})
export class PortfolioOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadResume() {
    console.log('download file');
  }

  handleFacebook() {
    window.open('', '_blank');
  }

  handleTwitter() {}

  handleInstagram() {
    window.open('https://www.instagram.com/jonatebread/', '_blank');
  }
}
