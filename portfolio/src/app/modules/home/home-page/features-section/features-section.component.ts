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

  constructor(private headerService: HeaderService, private settingsServices: SettingsService) { 

  }

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
    this.sessionStorageEvent__SetItem("DevelopmentStrategy");
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

  sessionStorageEvent__SetItem(menuItemID: string): void {
    this.headerService.sessionStorageEvent__SetItem(menuItemID);
  }

  onFeaturesCardClick(item: string): void {
    window.sessionStorage.setItem("activeFeaturesMenuitem",item);
    this.activateFeatureSection();

    switch(item) {
      case 'development': this.headerService.setupActiveFeaturesMenuItem('development'); break;
      case 'softwareArchitecture': this.headerService.setupActiveFeaturesMenuItem('softwareArchitecture'); break;
      case 'projectImplementation': this.headerService.setupActiveFeaturesMenuItem('projectImplementation');break;
      case 'mentoring': this.headerService.setupActiveFeaturesMenuItem('mentoring'); break;
      case 'leadership': this.headerService.setupActiveFeaturesMenuItem('leadership'); break;
      case 'consulting': this.headerService.setupActiveFeaturesMenuItem('consulting'); break;
      default: console.log("Error ActiveFeaturesMenuItem");
    }
    this.scrollToTop();
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
}
