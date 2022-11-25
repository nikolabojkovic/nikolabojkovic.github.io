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
  display = true;
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

  constructor(private settingsService: SettingsService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.homePageActivated();
    this.checkActiveMenuItem();
    this.checkThemeActiveMenuItem();
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

  setActiveMenuItem(value: HTMLElement): void {
    value.classList.remove('default-menu-item')
    value.classList.add('active-menu-item');
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
    let lightThemeColorPicker = document.getElementById("LightThemeColorPickerID") as HTMLElement;
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
    let darkThemeColorPicker = document.getElementById("DarkThemeColorPickerID") as HTMLElement;
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
    this.headerService.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
  }

  homePageDeactivated(): void {
    this.headerService.homeShadowID.style.backgroundColor = "var(--background-primary-color)";
  }

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

  closeDropDownMenu(): void {
    this.display = false;
  }

  showDropDownMenu(): void {
    this.display = true;
  }

  displaySettings(settingsButton: HTMLElement): void {
    this.headerService.displaySettings(settingsButton);
  }

}
