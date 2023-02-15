import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-development-strategy-page',
  templateUrl: './development-strategy-page.component.html',
  styleUrls: ['./development-strategy-page.component.scss']
})

export class DevelopmentStrategyPageComponent implements OnInit, AfterViewInit {

  constructor( private headerService: HeaderService, private loaderService: LoaderService ) { }

  ngOnInit(): void {
    this.activeFeaturesMenuItem();
  }
  
  ngAfterViewInit(): void {
    this.loaderService.desibleLoader(); 
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
