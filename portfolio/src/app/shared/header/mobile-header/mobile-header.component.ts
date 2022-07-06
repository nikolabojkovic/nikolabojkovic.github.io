import { Component, OnInit } from '@angular/core';
import { StandardHeaderComponent } from '../standard-header/standard-header.component';
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

  /*Zajednicko 1*/

  onDarkThemeClick(): void {
    this.settingsService.setDarkTheme();
  }

  onLightThemeClick(): void {
    this.settingsService.setLightTheme();
  }

    /*Zajednicko*/

  homePageActivated(): void {
    this.settingsService.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
  }

  homePageDeactivated(): void {
    this.settingsService.homeShadowID.style.backgroundColor = "var(--background-primary-color)";
  }


    /*Zajednicko 1 */
  activatelink(linkitem: HTMLElement) {
    this.headerService.activateLink(linkitem);
  }

    /*Zajednicko*/

  toggleMobileMenu(): void {
    this.headerService.toogleMobileMneuOn();
  }

  hideMobileMenu(): void {
    this.headerService.hideMobileMenuOn();
  }

  activatelinkMobile(itemMobile: HTMLElement): void {
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
}

