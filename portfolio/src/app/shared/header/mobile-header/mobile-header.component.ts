import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';
import { HeaderService } from '../../services/header.service';

import { faXmark, faBars, faGear, faSun, faMoon, faL} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {

  /*Settings*/

  featuresMenu = false;
  menuResume = false;
  lightThemeColorPickerState = false;
  darkThemeColorPickerState = false;

  facebook =  faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;
  linkedin = faLinkedinIn;

  sun = faSun;
  moon = faMoon;
  bar = faBars;
  gear = faGear
  closeBtn = faXmark;

  home: boolean = false;
  features: boolean = false;
  resume: boolean = false;
  portfolio: boolean = false;
  contact: boolean = false;
  clients: boolean = false;

  LightThemeMenuItemActive: boolean = false;
  DarkThemeMenuItemActive: boolean = false;

  featureMenuItemDevelopmentStrategy: boolean = false;
  featureMenuItemSoftwareArchitecture: boolean = false;
  featureMenuItemProjectImplementation: boolean = false;
  featureMenuItemMentoring: boolean = false;
  featureMenuItemLeadership: boolean = false;
  featureMenuItemConsulting: boolean = false;

  resumeMenuItemUniversity: boolean = false;
  resumeMenuItemInfoscreen: boolean = false;
  resumeMenuItemNultien: boolean = false;
  resumeMenuItemIntelisale: boolean = false;
  resumeMenuItemOrionInovation: boolean = false;

  /*settings*/

  constructor(private settingsService: SettingsService, private headerService: HeaderService) { }

  ngOnInit(): void {
    // Sending Items
  this.headerService.$ActiveResumeMenuItem.subscribe((item) => {
    this.checkActiveReusmeMenuItem(item);
  })

  this.headerService.$ActiveFeaturesMenuItem.subscribe((item) => {
    this.checkActiveFeaturesMenuItem(item);
  })

  this.headerService.$ActiveMenuItem.subscribe((item) => {
    switch(item) {
      case 'home':  this.resetMenuItems(); this.home = true; break;
      case 'features': this.resetMenuItems(); this.features = true; break;
      case 'resume': this.resetMenuItems(); this.resume = true; break;
      case 'portfolio': this.resetMenuItems(); this.portfolio = true; break;
      case 'contact': this.resetMenuItems(); this.contact = true; break;
      case 'clients': this.resetMenuItems(); this.clients = true; break;
    }
  })
  // Sending Items

    switch(this.settingsService.settings.theme) {
      case 'DarkRed':   //Force to jump down
      case 'DarkBlue': this.DarkThemeMenuItemActive = true; break;
      case 'LightRed': 
      case 'LightBlue': this.LightThemeMenuItemActive = true; break;
    }
  }

  resetMenuItems(): void {
    this.home = false;
    this.features = false;
    this.resume = false;
    this.contact = false;
    this.portfolio = false;
    this.clients = false;
  }

  checkActiveReusmeMenuItem(item:string) {
    this.setResumeMenuItemsToDefaults();
    switch(item) {
      case 'orionInovation': this.resumeMenuItemOrionInovation = true; break;
      case 'intelisale': this.resumeMenuItemIntelisale = true; break;
      case 'nultien': this.resumeMenuItemNultien = true; break;
      case 'infoscreenMicrogen': this.resumeMenuItemInfoscreen = true; break;
      case 'university': this.resumeMenuItemUniversity = true; break;
      default: console.log("Error ActiveResumeMenuItem") ;
    }
  }

  checkActiveFeaturesMenuItem(item: string) {
    this.setFeaturesMenuItemsToDefaults();
    switch(item) {
      case 'developmentStrategy': this.featureMenuItemDevelopmentStrategy = true; break;
      case 'softwareArchitecture': this.featureMenuItemSoftwareArchitecture = true; break;
      case 'projectImplementation': this.featureMenuItemProjectImplementation = true; break;
      case 'mentoring': this.featureMenuItemMentoring = true; break;
      case 'leadership': this.featureMenuItemLeadership = true; break;
      case 'consulting': this.featureMenuItemConsulting = true; break;
      default: console.log("Error ActiveFeaturesMenuItem");
    }
  }

    setResumeMenuItemsToDefaults(): void {
      this.resumeMenuItemOrionInovation = false;
      this.resumeMenuItemUniversity = false;
      this.resumeMenuItemInfoscreen= false;
      this.resumeMenuItemNultien = false;
      this.resumeMenuItemIntelisale= false;
      this.resumeMenuItemOrionInovation = false;
    }
  
    setFeaturesMenuItemsToDefaults(): void {
      this.featureMenuItemDevelopmentStrategy = false;
      this.featureMenuItemSoftwareArchitecture = false;
      this.featureMenuItemProjectImplementation = false;
      this.featureMenuItemMentoring = false;
      this.featureMenuItemLeadership = false;
      this.featureMenuItemConsulting = false;
    }
  
    closeFeatureDropDownMenu(item: string): void {
      this.setFeaturesMenuItemsToDefaults();
      this.setResumeMenuItemsToDefaults();
      this.headerService.setupActiveFeaturesMenuItem(item);
    }

    closeResumeDropDownMenu(item: string): void {
      this.setResumeMenuItemsToDefaults();
      this.setFeaturesMenuItemsToDefaults();
      this.headerService.setupActiveResumeMenuItem(item);
    }

    setItemsOnDefault(): void {
      this.setResumeMenuItemsToDefaults();
      this.setFeaturesMenuItemsToDefaults();
    }
  
  onDarkThemeClick(): void {
    let lightButton = document.getElementById("MenuThemeLightID") as HTMLElement;
    let darkButton = document.getElementById("MenuThemeDarkID") as HTMLElement;
    this.settingsService.setDarkTheme(0);

    darkButton?.classList.remove("default-link");
    darkButton?.classList.add("active-link");
    lightButton?.classList.remove("active-link");
  }

  onLightThemeClick(): void {
    let lightButton = document.getElementById("MenuThemeLightID") as HTMLElement;
    let darkButton = document.getElementById("MenuThemeDarkID") as HTMLElement;
    this.settingsService.setLightTheme(0);

    lightButton?.classList.remove("default-link");
    lightButton?.classList.add("active-link");
    darkButton?.classList.remove("active-link");
  }

  activatelink(linkitem: HTMLElement) {
    this.headerService.activateLink(linkitem);
  }

  toggleMobileMenu(): void {
    this.headerService.toogleMobileMneuOn();
  }

  hideMobileMenu(): void {
    this.headerService.hideMobileMenuOn();
  }

  activatelinkMobile(itemMobile: HTMLElement): void {
    this.headerService.HomePageDeactivated();
    this.headerService.activateLinkMobileOn(itemMobile);
  }
  
  displayFeatures(): void {
    this.headerService.displayFeaturesOn();
  }

  resetLinks(): void {
    this.headerService.resetLinksOn();
  }

  displayResume(): void {
    this.headerService.displayResumeOn();
  }
  
  displayThemes(): void {
    this.headerService.displayThemesOn();
  }
  displayLanguages(): void {
    this.headerService.displayLanguagesOn();
  }

  onLightRedThemeClick(): void {
    this.resetThemesItems();
    this.LightThemeMenuItemActive = true;
    this.settingsService.setLightTheme(0);
  }

  onLightBlueThemeClick(): void {
    this.resetThemesItems();
    this.LightThemeMenuItemActive = true;
    this.settingsService.setLightTheme(1);
  }

  resetThemesItems(): void {
    this.DarkThemeMenuItemActive = false;
    this.LightThemeMenuItemActive = false;
  }

  setActiveButton(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    lightButton?.classList.remove("default");
    lightButton?.classList.add("active");
    darkButton?.classList.remove("active");
  }

  activeThemeItem(linkitem:HTMLElement) {
    this.headerService.SaveThemeMenuItem(linkitem);
  }

  setActiveThemeMenuItem(value: HTMLElement): void {
    this.updateThemeMenuItems();
    value.classList.remove("defaultThemeColor");
    value.classList.add("activeThemeColor");
  }

  updateThemeMenuItems(): void {
    let light = document.getElementById("lightThemeID") as HTMLElement;
    let dark = document.getElementById("darkThemeID") as HTMLElement;

    light.classList.remove("activeThemeColor");
    light.classList.add("defaultThemeColor");
    dark.classList.remove("activeThemeColor");
    dark.classList.add("defaultThemeColor");
  }

  
  displayOnLightThemeColorPicker(): void {
    if(this.lightThemeColorPickerState == false) {
      this.lightThemeColorPickerState = true;
    } else {
      this.lightThemeColorPickerState = false;
    }

    if(this.darkThemeColorPickerState == true) {
      this.darkThemeColorPickerState = false;
    }
  }

  onDarkRedThemeClick(): void {
    this.resetThemesItems();
    this.DarkThemeMenuItemActive = true;
    this.settingsService.setDarkTheme(0);
  }

  onDarkBlueThemeClick(): void {
    this.resetThemesItems();
    this.DarkThemeMenuItemActive = true;
    this.settingsService.setDarkTheme(1);
  }

  displayOnDarkThemeColorPicker(): void {
    this.darkThemeColorPickerState = !this.darkThemeColorPickerState;

    if(this.lightThemeColorPickerState) {
      this.lightThemeColorPickerState = false;
    }
  }
}

