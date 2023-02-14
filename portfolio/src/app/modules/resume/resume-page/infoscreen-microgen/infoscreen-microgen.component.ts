import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-infoscreen-microgen',
  templateUrl: './infoscreen-microgen.component.html',
  styleUrls: ['./infoscreen-microgen.component.scss']
})
export class InfoscreenMicrogenComponent implements OnInit, AfterViewInit {

  constructor(private headerService: HeaderService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.activeResumeMenuItem();
  }

  ngAfterViewInit(): void {
    this.loaderService.desibleLoader(); 
  }
  

  activeResumeMenuItem(): void {
    let sessionItem = window.sessionStorage.getItem("activeResumeMenuItem");
    if(sessionItem != null) {
      this.headerService.setupActiveResumeMenuItem(sessionItem);
    }
  }

  closeResume(): void {
    this.headerService.unHighlightFeaturesMenuitem();
    this.scrollToTop();
    this.headerService.resetResumeMenuItems();
  }

  

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
}
