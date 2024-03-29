import { Component, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SettingsService } from "./settings.service";

@Injectable({
    providedIn:'root'
})

export class HeaderService {

    featuresMenu = false;
    menuResume = false;
    homeShadowID: any;
    SettingsButtonActive = false;
    resetFeatureMenuItems = false;
    public $ActiveResumeMenuItem: Subject<string> = new Subject();
    public $ActiveFeaturesMenuItem: Subject<string> = new Subject();
    public $ActiveMenuItem: Subject<string> = new Subject();

    constructor(private settingsService: SettingsService) {}

    public setupActiveResumeMenuItem(item: string) {
    //  window.sessionStorage.setItem('activeResumeMenuItem',item);
    //  this.$ActiveResumeMenuItem.next(item);
    }

    public setupActiveFeaturesMenuItem(item: string) {
     //  window.sessionStorage.setItem('activeFeaturesMenuItem',item);
     //  this.$ActiveFeaturesMenuItem.next(item);
    }


    activateHomeBanner(): void {
      this.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
    }

    unHighlightFeaturesMenuitem(): void {
      let activeMenuItem = document.getElementById("home") as HTMLElement;
      this.activateLink(activeMenuItem);
    }

    activateLink(Element: HTMLElement): void {
      let menuitems = document.getElementsByClassName('menu-links');
      for(let i=0; i<menuitems.length; i++) {
        menuitems[i].classList.remove('active-menu-item');
        menuitems[i].classList.add('default-menu-item');
      }
      Element.classList.remove('default-menu-item')
      Element.classList.add('active-menu-item');
      this.SaveMenuItem(Element);
    }

    resetResumeMenuItems(): void {
      let items = document.getElementsByClassName('resume-menu-item-active');
      for(let i = 0; i < items.length; i++) {
        items[i].classList.remove("resume-menu-item-active")
      }
    }
    
    HomePageDeactivated(): void {
      this.homeShadowID.style.backgroundColor = "var(--background-primary-color)";
    }

    toogleMobileMneuOn(): void {
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
        this.resetLinksOn();
    }

    closeRestOfMenus(): void {
        this.closeFeatures();
        this.closeResume();
        this.closeThemes();
        this.closeLanguages();
    }

    resetLinksOn():  void {
        let menu = document.getElementsByClassName("mobile-headers");
        for(let i = 0 ;i<menu.length ;i ++) {
          menu[i].classList.remove("menu-items-mobile-active");
          menu[i].classList.add("menu-items-mobile-default");
        }
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

    closeLanguages(): void {
      let menu = document.getElementById("languagesMenu") as HTMLElement;
      menu.style.display = 'none';
      this.settingsService.menuLanguages = false;
    }
     
    displayFeaturesOn(): void {
        let menu = document.getElementById("featuresMenu") as HTMLElement;
        if(this.featuresMenu == true) {
          this.resetLinksOn();
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

    hideMobileMenuOn(): void {
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
        this.resetLinksOn();
    }
    
    activateLinkMobileOn(Element: HTMLElement): void {
        let menu = document.getElementsByClassName("mobile-headers");
        for(let i = 0 ;i<menu.length ;i ++) {
          menu[i].classList.remove("menu-items-mobile-active");
          menu[i].classList.add("menu-items-mobile-default");
        }
        Element.classList.remove("menu-items-mobile-default");
        Element.classList.add("menu-items-mobile-active");
    }

    displayResumeOn(): void {
        let menu = document.getElementById("resumeMenu") as HTMLElement;
        if(this.menuResume == true) {
          this.resetLinksOn();
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

    displayThemesOn(): void {
        let menu = document.getElementById("themesMenu") as HTMLElement;
        if(!this.settingsService.menuThemes) {
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

    displayLanguagesOn(): void {
        let menu = document.getElementById("languagesMenu") as HTMLElement;
        if(this.settingsService.menuLanguages == true) {}
        else {
          this.closeRestOfMenus();
        }
        if(this.settingsService.menuLanguages == false) {
          menu.style.display = "block";
          this.settingsService.menuLanguages = true;
        } else {
          menu.style.display = "none";
          this.settingsService.menuLanguages = false;
        }
    }

    SaveMenuItem(element: HTMLElement): void {
      window.sessionStorage.setItem("ActiveMenuItem", element.id);
    }

    SaveThemeMenuItem(element: HTMLElement): void {
      window.sessionStorage.setItem("ActiveThemeMenuItem",element.id);
    }

    loadActiveMenuItem(): string {
      let activeItem = window.sessionStorage.getItem("ActiveMenuItem");

      if(activeItem == null) {
        return "home";
      }
      return activeItem;
    }

    loadActiveThemeMenuItem(): string {
      let activeThemeMenuItem = window.sessionStorage.getItem("ActiveThemeMenuItem");
      if(activeThemeMenuItem == null) {
        return "themeLightID";
      }
      return activeThemeMenuItem;
    }

    activateFeatureSection(): void {
      let featuresMenuItem = document.getElementById("features") as HTMLElement;
      this.activateLink(featuresMenuItem);
    }

    displaySettings(settingsButton: HTMLElement): void {
      if( this.SettingsButtonActive == false ) {
        settingsButton.style.display = "block";
        this.SettingsButtonActive = true;
        this.setUpSettingsButton();
      } else {
        settingsButton.style.display = "none";
        this.SettingsButtonActive = false;
        this.setUpSettingsButton();
      }
    }

    setUpSettingsButton(): void {
      let settingsButton = document.getElementById("settingsButton") as HTMLElement;
      if(this.SettingsButtonActive) {
        settingsButton.style.color = "var(--text-primary-color)"
      }
      else {
        settingsButton.style.color = "var(--text-ternary-color)"
      }
    }

    checkFeatureMenuitems(): boolean {
      return this.resetFeatureMenuItems;
    }

    setItemsOnDefault(): void {
      this.resetFeatureMenuItems = true;
      this.resetAllMenuItems();
    }

    confirmReset(): void {
      this.resetFeatureMenuItems = false;
    }

    resetAllMenuItems(): void {
      let items = document.getElementsByClassName("feature-menu-items");
      for(let i = 0; i<items.length; i++ ) {
        items[i].classList.remove("feature-menu-item-active");
      }
    }

    sessionStorageEvent__SetItem(menuItemID: string): void {
      window.sessionStorage.setItem('featuresMenuItemActive',menuItemID);
    }

    sessionStorageEvent__GetItem(): void {
      let session = window.sessionStorage.getItem("featuresMenuItemActive");
      let item;
      if(session != null) {
        item = document.getElementById("DevelopmentStrategy");
      }
  
    }
}