import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-software-architecture-page',
  templateUrl: './software-architecture-page.component.html',
  styleUrls: ['./software-architecture-page.component.scss']
})

export class SoftwareArchitecturePageComponent implements OnInit {

  constructor( private headerService: HeaderService) { }

  ngOnInit(): void {
    this.activeFeaturesMenuItem();
  }
  

  activeFeaturesMenuItem(): void {
    let sessionItem = window.sessionStorage.getItem("activeFeaturesMenuItem");
    if(sessionItem != null) {
      this.headerService.setupActiveFeaturesMenuItem(sessionItem);
    }
  }

  closeFeatures(): void {
    this.headerService.unHighlightFeaturesMenuitem();
    this.scrollToTop();
    this.headerService.setItemsOnDefault();
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
}
