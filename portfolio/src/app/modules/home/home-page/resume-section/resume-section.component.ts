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
    this.headerService.homeShadowID.style.backgroundColor = "var(--background-primary-color)";
  }

  activatelink() {
    let linkitem = document.getElementById("resume") as HTMLElement;
    this.headerService.activateLink(linkitem);
    this.scrollToTop();
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
}
