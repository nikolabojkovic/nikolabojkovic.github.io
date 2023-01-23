import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  destroyHomePageShadow(): void {
    this.homePageDeactivated();
  }

  homePageDeactivated(): void {
  }

  activatelink() {
    let linkitem = document.getElementById("resume") as HTMLElement;
    this.headerService.activateLink(linkitem);
    this.scrollToTop();
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }

  onResumeCardClick(item: string): void {
    this.destroyHomePageShadow();
    this.activatelink()

    switch(item) {
      case 'orionInovation': this.headerService.setupActiveResumeMenuItem('orionInovation'); break;
      case 'intelisale': this.headerService.setupActiveResumeMenuItem('intelisale'); break;
      case 'nultien': this.headerService.setupActiveResumeMenuItem('nultien');break;
      case 'infoscreen': this.headerService.setupActiveResumeMenuItem('infoscreen'); break;
      case 'university': this.headerService.setupActiveResumeMenuItem('university'); break;
      default: console.log("Error ActiveResumeMenuItem");
    }
   // this.headerService.setNotification(4);
  }
}
