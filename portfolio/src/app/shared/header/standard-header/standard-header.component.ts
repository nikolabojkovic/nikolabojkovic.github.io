import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { faXmark, faBars, faGear, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './standard-header.component.html',
  styleUrls: ['./standard-header.component.scss']
})

export class StandardHeaderComponent implements OnInit {

  featuresMenu = false;
  menuResume = false;
  displayFeature = true;
  displayResume = true;
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


  constructor(private settingsService: SettingsService, private headerService: HeaderService) { }

  ngOnInit(): void {

    // Sending Items
    this.headerService.$ActiveResumeMenuItem.subscribe((item) => {
      this.checkActiveReusmeMenuItem(item);
    })

    this.headerService.$ActiveFeaturesMenuItem.subscribe((item) => {
      this.checkActiveFeaturesMenuItem(item);
    })
    // Sending Items

    this.checkFeatureMenuItems();
    this.homePageActivated();
    this.checkActiveMenuItem();
    this.checkThemeActiveMenuItem();
  }


  checkActiveReusmeMenuItem(item:string) {
    this.setResumeMenuItemsToDefaults();
    switch(item) {
      case 'orionInovation': this.resumeMenuItemOrionInovation = true; break;
      case 'intelisale': this.resumeMenuItemIntelisale = true; break;
      case 'nultien': this.resumeMenuItemNultien = true; break;
      case 'infoscreen': this.resumeMenuItemInfoscreen = true; break;
      case 'university': this.resumeMenuItemUniversity = true; break;
      default: console.log("Error ActiveResumeMenuItem") ;
    }
  }

  checkActiveFeaturesMenuItem(item: string) {
    this.setFeaturesMenuItemsToDefaults();
    switch(item) {
      case 'development': this.featureMenuItemDevelopmentStrategy = true; break;
      case 'softwareArchitecture': this.featureMenuItemSoftwareArchitecture = true; break;
      case 'projectImplementation': this.featureMenuItemProjectImplementation = true;break;
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

  checkActiveMenuItem(): void {
    let activeMenuItem = this.headerService.loadActiveMenuItem();
    var value;

    value = document.getElementById(activeMenuItem) as HTMLElement;
    this.setActiveMenuItem(value);
  }

  checkThemeActiveMenuItem(): void {
    let activeThemeMenuItem = this.headerService.loadActiveThemeMenuItem();
    let element;

    element = document.getElementById(activeThemeMenuItem) as HTMLElement;
    this.setActiveThemeMenuItem(element);

  }

  checker(value: HTMLElement, className: string): boolean {
    return value?.classList.contains(className);
  }

  setActiveMenuItem(value: HTMLElement): void {
    if(this.checker(value, "default-menu-item")) {
      value?.classList.remove('default-menu-item')
    }
    value?.classList.add('active-menu-item');
  }

  setActiveThemeMenuItem(value: HTMLElement): void {
    this.updateThemeMenuItems();
    if(this.checker(value, "defaultThemeColor")) {
      value?.classList.remove("defaultThemeColor");
    }
    value?.classList.add("activeThemeColor");
  }

  updateThemeMenuItems(): void {
    let light = document.getElementById("lightThemeID") as HTMLElement;
    let dark = document.getElementById("darkThemeID") as HTMLElement;

    light.classList.remove("activeThemeColor");
    light.classList.add("defaultThemeColor");
    dark.classList.remove("activeThemeColor");
    dark.classList.add("defaultThemeColor");
  }
 
  onDarkBlueThemeClick(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    this.settingsService.setDarkTheme(1);

    darkButton?.classList.remove("default");
    darkButton?.classList.add("active");
    lightButton?.classList.remove("active");
  }

  onDarkRedThemeClick(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    this.settingsService.setDarkTheme(0);

    darkButton?.classList.remove("default");
    darkButton?.classList.add("active");
    lightButton?.classList.remove("active");
  }

  setActiveButton(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    lightButton?.classList.remove("default");
    lightButton?.classList.add("active");
    darkButton?.classList.remove("active");
  }

  onLightRedThemeClick(): void {
    this.setActiveButton();
    this.settingsService.setLightTheme(0);
  }
  onLightBlueThemeClick(): void {
    this.setActiveButton();
    this.settingsService.setLightTheme(1);
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

  displayOnDarkThemeColorPicker(): void {
    if(this.darkThemeColorPickerState == false) {
      this.darkThemeColorPickerState = true;
    } else {
      this.darkThemeColorPickerState = false;
    }

    if(this.lightThemeColorPickerState == true) {
      this.lightThemeColorPickerState = false;
    }
  }

  destroyHomePageShadow(): void {
    this.homePageDeactivated();
  }

  homePageActivated(): void {
    this.setItemsOnDefault();
  }

  homePageDeactivated(): void {}

  activatelink(linkitem: HTMLElement) {
    this.headerService.activateLink(linkitem);
  }

  activeThemeItem(linkitem:HTMLElement) {
    this.setActiveThemeMenuItem(linkitem);
    this.headerService.SaveThemeMenuItem(linkitem);
  }

  toggleMobileMenu(): void {
    this.headerService.toogleMobileMneuOn();
  }

  hideMobileMenu(): void {
    this.headerService.hideMobileMenuOn();
  }

  activatelinkMobile(itemMobile: HTMLElement): void {
    this.headerService.activateLinkMobileOn(itemMobile);
  }

  closeFeatureDropDownMenu(item: string): void {
    this.displayFeature = false;
    this.setResumeMenuItemsToDefaults();
    this.headerService.setupActiveFeaturesMenuItem(item);
  }

  showFeatureDropDownMenu(): void {
    this.displayFeature = true;
  }

  displaySettings(settingsButton: HTMLElement): void {
    this.headerService.displaySettings(settingsButton);
  }

  closeResumeDropDownMenu(item: string): void {
    this.displayResume = false;
    this.resetAllLinks();
    this.headerService.setupActiveResumeMenuItem(item);
  }

  showResumeDropDownMenu(): void {
    this.displayResume = true;
  }

  selectMenuItemEvent(item: string): void {
    this.setItemsOnDefault();
    switch(item) {
      case 'developmentStrategy': this.featureMenuItemDevelopmentStrategy = true; break;
      case 'softwareArchitecture': this.featureMenuItemSoftwareArchitecture = true; break;
      case 'projectImplementation': this.featureMenuItemProjectImplementation = true; break;
      case 'mentoring': this.featureMenuItemMentoring = true; break;
      case 'leadership': this.featureMenuItemLeadership = true;  break;
      case 'consulting': this.featureMenuItemConsulting = true; break;
    }
  }

  
  setItemsOnDefault(): void {
    this.headerService.resetAllMenuItems();
    this.featureMenuItemDevelopmentStrategy = false;
    this.featureMenuItemSoftwareArchitecture = false;
    this.featureMenuItemProjectImplementation = false;
    this.featureMenuItemMentoring = false;
    this.featureMenuItemLeadership = false;
    this.featureMenuItemConsulting = false;
  }

  checkFeatureMenuItems(): void {
    setInterval(()=> {
      if(this.headerService.checkFeatureMenuitems()){
        this.setItemsOnDefault();
        this.headerService.confirmReset();
      }
    },100)
  }

  resetAllLinks(): void {
    this.setItemsOnDefault();
  }
}
