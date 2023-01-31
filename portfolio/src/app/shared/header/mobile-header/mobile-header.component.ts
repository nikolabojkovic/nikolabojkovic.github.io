import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';
import { HeaderService } from '../../services/header.service';

import { faXmark, faBars, faGear, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
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

  /*settings*/

  constructor(private settingsService: SettingsService, private headerService: HeaderService) { }

  ngOnInit(): void { }

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
    this.setActiveButton();
    this.settingsService.setLightTheme(0);
  }

  setActiveButton(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    lightButton?.classList.remove("default");
    lightButton?.classList.add("active");
    darkButton?.classList.remove("active");
  }

  activeThemeItem(linkitem:HTMLElement) {
    this.setActiveThemeMenuItem(linkitem);
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

  onDarkRedThemeClick(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    this.settingsService.setDarkTheme(0);

    darkButton?.classList.remove("default");
    darkButton?.classList.add("active");
    lightButton?.classList.remove("active");
  }

  onDarkBlueThemeClick(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    this.settingsService.setDarkTheme(1);

    darkButton?.classList.remove("default");
    darkButton?.classList.add("active");
    lightButton?.classList.remove("active");
  }

  displayOnDarkThemeColorPicker(): void {
    this.darkThemeColorPickerState = !this.darkThemeColorPickerState;

    if(this.lightThemeColorPickerState) {
      this.lightThemeColorPickerState = false;
    }
  }
}

