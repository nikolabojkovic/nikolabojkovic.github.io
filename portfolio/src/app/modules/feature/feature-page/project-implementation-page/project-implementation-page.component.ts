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
