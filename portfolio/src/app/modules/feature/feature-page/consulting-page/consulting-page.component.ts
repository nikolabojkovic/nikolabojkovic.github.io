import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HeaderService } from 'src/app/shared/services/header.service';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-consulting-page',
  templateUrl: './consulting-page.component.html',
  styleUrls: ['./consulting-page.component.scss']
})

export class ConsultingPageComponent implements OnInit {

  constructor( private headerService: HeaderService, private settingsServices: SettingsService, private loaderService: LoaderService) { }

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
