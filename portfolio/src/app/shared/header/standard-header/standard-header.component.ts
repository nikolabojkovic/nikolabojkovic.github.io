import { Component, OnInit } from '@angular/core';
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
    this.checkTheme();
    this.homePageActivated();
    this.checkActiveMenuItem();
  }

  checkActiveMenuItem(): void {
    let activeMenuItem = this.headerService.loadActiveMenuItem();
    var value;

    value = document.getElementById(activeMenuItem) as HTMLElement;
    this.setActiveMenuItem(value);
  }

  setActiveMenuItem(value: HTMLElement): void {
    value.classList.remove('default-menu-item')
    value.classList.add('active-menu-item');
  }

  checkTheme(): void {
    if(this.settingsService.settings.theme == "Dark") {
      this.onDarkThemeClick();
    } else {
      this.onLightThemeClick();
    }
  }

  onDarkThemeClick(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    this.settingsService.setDarkTheme();

    darkButton?.classList.remove("default");
    darkButton?.classList.add("active");
    lightButton?.classList.remove("active");
  }

  onLightThemeClick(): void {
    let lightButton = document.getElementById("lightThemeID") as HTMLElement;
    let darkButton = document.getElementById("darkThemeID") as HTMLElement;
    this.settingsService.setLightTheme();

    lightButton?.classList.remove("default");
    lightButton?.classList.add("active");
    darkButton?.classList.remove("active");
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

  toggleMobileMenu(): void {
    this.headerService.toogleMobileMneuOn();
  }

  hideMobileMenu(): void {
    this.headerService.hideMobileMenuOn();
  }

  activatelinkMobile(itemMobile: HTMLElement): void {
    this.headerService.activateLinkMobileOn(itemMobile);
  }
}
