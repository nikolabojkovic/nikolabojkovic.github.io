import { Component, OnInit } from '@angular/core';
import { StandardHeaderComponent } from '../standard-header/standard-header.component';
import { faXmark, faBars, faGear, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {

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

  constructor(private settingsService: SettingsService) { }

 
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
    let menuitems = document.getElementsByClassName('menu-links');
     for(let i=0; i<menuitems.length; i++) {
       menuitems[i].classList.remove('active-menu-item');
       menuitems[i].classList.add('default-menu-item');
     }
     linkitem.classList.remove('default-menu-item')
     linkitem.classList.add('active-menu-item');
  }

  toggleMobileMenu(): void {
    let menu = document.getElementById("menuMobile") as HTMLElement;
    let menuShadow = document.getElementById("menuShadow") as HTMLElement;
    if(this.settingsService.togglerActivated == false) {
      menu.style.left = "0px";
      menu.style.transitionDuration = "600ms";
      this.settingsService.togglerActivated  = true;
    } else {
      menu.style.left = "-414px";
      menu.style.transitionDuration = "600ms";
      this.settingsService.togglerActivated = false;
    }
    this.closeRestOfMenus();
    if(this.settingsService.menuShadow == false) {
      menuShadow.style.display = "block";
      this.settingsService.menuShadow = true;
    } else {
      menuShadow.style.display = "none";
      this.settingsService.menuShadow = false;
    }
    this.resetLinks();
  }

  hideMobileMenu(): void {
    let menu = document.getElementById("menuMobile") as HTMLElement;
    let menuShadow = document.getElementById("menuShadow") as HTMLElement;
    if(this.settingsService.togglerActivated == false) {
      menu.style.left = "0px";
      menu.style.transitionDuration = "600ms";
      this.settingsService.togglerActivated  = true;
    } else {
      menu.style.left = "-100%";
      menu.style.transitionDuration = "600ms";
      this.settingsService.togglerActivated  = false;
    }
    this.closeRestOfMenus();
    if(this.settingsService.menuShadow == false) {
      menuShadow.style.display = "block";
      this.settingsService.menuShadow = true;
    } else {
      menuShadow.style.display = "none";
      this.settingsService.menuShadow= false;
    }
    this.resetLinks();
  }

  activatelinkMobile(itemMobile: HTMLElement): void {
    let menu = document.getElementsByClassName("mobile-headers");
    for(let i = 0 ;i<menu.length ;i ++) {
      menu[i].classList.remove("menu-items-mobile-active");
      menu[i].classList.add("menu-items-mobile-default");
      console.log("aa");
    }
    itemMobile.classList.remove("menu-items-mobile-default");
    itemMobile.classList.add("menu-items-mobile-active");
    console.log(itemMobile);

  }
  
  resetLinks():  void {
    let menu = document.getElementsByClassName("mobile-headers");
    for(let i = 0 ;i<menu.length ;i ++) {
      menu[i].classList.remove("menu-items-mobile-active");
      menu[i].classList.add("menu-items-mobile-default");
    }
  }

  displayFeatures(): void {
    let menu = document.getElementById("featuresMenu") as HTMLElement;
    if(this.featuresMenu == true) {
      this.resetLinks();
    } else {
      this.closeRestOfMenus();
    }
    if(this.featuresMenu == false) {
      menu.style.display = "block";
      this.featuresMenu = true;
    } else {
      menu.style.display = "none";
      this.featuresMenu = false;
    }

  }

  displayResume(): void {
    let menu = document.getElementById("resumeMenu") as HTMLElement;
    if(this.menuResume == true) {
      this.resetLinks();
    } else {
      this.closeRestOfMenus();
    }
    if(this.menuResume == false) {
      menu.style.display = "block";
      this.menuResume = true;
    } else {
      menu.style.display = "none";
      this.menuResume = false;
    }
  }
  
  closeRestOfMenus(): void {
    this.closeFeatures();
    this.closeResume();
    this.closeThemes();
  }
  
  closeFeatures(): void {
    let menu = document.getElementById("featuresMenu") as HTMLElement;
    menu.style.display = 'none';
    this.featuresMenu = false;
  }
  closeResume(): void {
    let menu = document.getElementById("resumeMenu") as HTMLElement;
    menu.style.display = 'none';
    this.menuResume = false;
  }

  closeThemes(): void {
    let menu = document.getElementById("themesMenu") as HTMLElement;
    menu.style.display = 'none';
    this.settingsService.menuThemes = false;
  }
  displayThemes(): void {
    let menu = document.getElementById("themesMenu") as HTMLElement;
    if(this.settingsService.menuThemes == true) {

    } else {
      this.closeRestOfMenus();
    }
    if(this.settingsService.menuThemes == false) {
      menu.style.display = "block";
      this.settingsService.menuThemes = true;
    } else {
      menu.style.display = "none";
      this.settingsService.menuThemes = false;
    }
  }
}

