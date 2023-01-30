import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/shared/services/header.service';
import { SettingsService } from 'src/app/shared/services/settings.service';
@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {

  constructor(private headerService: HeaderService, private settingsServices: SettingsService) { }

  ngOnInit(): void {

  }

  arrow = faArrowRight;
  datum = new Date();

  activateFeatureSection(): void {
    this.headerService.activateFeatureSection();
  }

  selectDevelopmentStrategy(): void {
    this.headerService.resetAllMenuItems();
    let item = document.getElementById("DevelopmentStrategy") as HTMLElement;
    item.classList.add("feature-menu-item-active")
  }

  selectSoftwareArchitecture(): void {
    this.headerService.resetAllMenuItems();
    let item = document.getElementById("SoftwareArhitecture") as HTMLElement;
    item.classList.add("feature-menu-item-active")
  }

  selectProjectImplementation(): void {
    this.headerService.resetAllMenuItems();
    let item = document.getElementById("ProjectImplementation") as HTMLElement;
    item.classList.add("feature-menu-item-active")
  }

  selectMentoring(): void {
    this.headerService.resetAllMenuItems();
    let item = document.getElementById("Mentoring") as HTMLElement;
    item.classList.add("feature-menu-item-active")
  }

  selectLeadership(): void {
    this.headerService.resetAllMenuItems();
    let item = document.getElementById("Leadership") as HTMLElement;
    item.classList.add("feature-menu-item-active")
  }

  selectConsulting(): void {
    this.headerService.resetAllMenuItems();
    let item = document.getElementById("Consulting") as HTMLElement;
    item.classList.add("feature-menu-item-active")
  }

  onFeaturesCardClick(section: string): void {
    this.activateFeatureSection();
    switch(section) {
      case 'development': this.selectDevelopmentStrategy(); break;
      case 'softwareArchitecture': this.selectSoftwareArchitecture(); break;
      case 'projectImplementation': this.selectProjectImplementation(); break;
      case 'mentoring': this.selectMentoring(); break; 
      case 'leadership': this.selectLeadership(); break;
      case 'consulting': this.selectConsulting(); break;
    }
    // this.headerService.setNotification(10);
  }
}
