import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-project-implementation-page',
  templateUrl: './project-implementation-page.component.html',
  styleUrls: ['./project-implementation-page.component.scss']
})

export class ProjectImplementationPageComponent implements OnInit {

  constructor( private headerService: HeaderService) { }

  ngOnInit(): void {
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
