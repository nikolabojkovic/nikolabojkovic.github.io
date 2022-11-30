import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-leadership-page',
  templateUrl: './leadership-page.component.html',
  styleUrls: ['./leadership-page.component.scss']
})

export class LeadershipPageComponent implements OnInit {

  constructor( private headerService: HeaderService) { }

  ngOnInit( ): void {
  }

  closeFeatures(): void {
    this.headerService.unHighlightFeaturesMenuitem();
    this.headerService.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
    this.scrollToTop();
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
}