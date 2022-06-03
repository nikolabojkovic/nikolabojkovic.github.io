import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  togglerActivated = false;
  featuresMenu = false;
  menuResume = false;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void { }

  onDarkThemeClick(): void {
    this.settingsService.setDarkTheme();
  }

  onLightThemeClick(): void {
    this.settingsService.setLightTheme();
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

    if(this.togglerActivated == false) {
      menu.style.left = "0px";
      menu.style.transitionDuration = "600ms";
      this.togglerActivated = true;
    } else {
      menu.style.left = "-500px";
      menu.style.transitionDuration = "600ms";
      this.togglerActivated = false;
    }
    this.closeRestOfMenus();
  }

  hideMobileMenu(): void {
    let menu = document.getElementById("menuMobile") as HTMLElement;
    if(this.togglerActivated == false) {
      menu.style.left = "0px";
      menu.style.transitionDuration = "600ms";
      this.togglerActivated = true;
    } else {
      menu.style.left = "-100%";
      menu.style.transitionDuration = "600ms";
      this.togglerActivated = false;
    }
    this.closeRestOfMenus();
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

  displayFeatures(): void {
    let menu = document.getElementById("featuresMenu") as HTMLElement;
    if(this.featuresMenu == true) {

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
}
