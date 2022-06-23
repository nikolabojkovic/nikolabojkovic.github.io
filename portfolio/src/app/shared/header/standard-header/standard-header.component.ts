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

  ngOnInit(): void { }

  onDarkThemeClick(): void {
    this.settingsService.setDarkTheme();
  }

  onLightThemeClick(): void {
    this.settingsService.setLightTheme();
  }

  homePageActivated(): void {
    this.settingsService.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
  }

  homePageDeactivated(): void {
    this.settingsService.homeShadowID.style.backgroundColor = "var(--background-primary-color)";
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
