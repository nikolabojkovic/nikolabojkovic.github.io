import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from '../models/settings.model';

@Injectable({
    providedIn: 'root'
})

export class SettingsService {

    settings: Settings;
    homeShadow: any;
    homeShadowID: any;
    menuThemes = false;
    menuLanguages = false;
    togglerActivated = false;
    menuShadow = false;
    homePageActive = true;

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en-US');
        this.settings = new Settings('DarkRed', 'en-US');
    }
    
    homePageActivated(): void {
        if(this.homeShadowID == undefined) {
            return;
        }
        this.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
    }

    homePageDeactivated(): void {
        if(this.homeShadowID == undefined) {
            return;
        }
        this.homeShadowID.style.backgroundColor = "var(--background-primary-color)";
    }
    
    loadSettings(): void {
        let settingsAsString = localStorage.getItem("settings");

        if (settingsAsString) {
            let storage = JSON.parse(settingsAsString);
            this.settings = new Settings(storage.theme, storage.language);
        }

        this.homePageActivated();
        this.loadTheme();
        this.loadLanguage();
    }

    setDarkTheme(type:number): void {
      if( type == 0 ) {
            document.getElementsByTagName('body')[0].classList.remove("theme-dark-blue");
            document.getElementsByTagName('body')[0].classList.remove("theme-light-blue");
            document.getElementsByTagName('body')[0].classList.remove("theme-light-red");
            document.getElementsByTagName('body')[0].classList.add("theme-dark-red");
            this.settings.setTheme('DarkRed');
        } else {
            document.getElementsByTagName('body')[0].classList.remove("theme-dark-red");
            document.getElementsByTagName('body')[0].classList.remove("theme-light-red");
            document.getElementsByTagName('body')[0].classList.remove("theme-light-blue");
            document.getElementsByTagName('body')[0].classList.add("theme-dark-blue");
            this.settings.setTheme('DarkBlue');
        }
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }

    setLightTheme(type:number): void {
        if(type == 0 ) {
            document.getElementsByTagName('body')[0].classList.remove("theme-dark-blue");
            document.getElementsByTagName('body')[0].classList.remove("theme-dark-red");
            document.getElementsByTagName('body')[0].classList.remove("theme-light-blue");
            document.getElementsByTagName('body')[0].classList.add("theme-light-red");
            this.settings.setTheme('LightRed');
        } else {
            document.getElementsByTagName('body')[0].classList.remove("theme-dark-blue");
            document.getElementsByTagName('body')[0].classList.remove("theme-dark-red");
            document.getElementsByTagName('body')[0].classList.remove("theme-light-red");
            document.getElementsByTagName('body')[0].classList.add("theme-light-blue");
            this.settings.setTheme('LightBlue');
        }
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }



    setLanguage(language: string): void {
        this.translate.use(language);
        this.settings.setLanguage(language);
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }

    private loadTheme(): void {
        switch(this.settings.theme) {
            case "DarkRed":
                this.setDarkTheme(0);
                break;
            case "DarkBlue":
                this.setDarkTheme(1);
                break;
            case "LightRed":
                this.setLightTheme(0);
                break;
            case "LightBlue":
                this.setLightTheme(1);
                break;
            default:
                this.setDarkTheme(0);
        }
    }

    private loadLanguage(): void {
        if(this.settings.language == "en-US") {
            this.setLanguage("en-US");
            return;
        } 
        
        if (this.settings.language == "srb-LT"){
            this.setLanguage("srb-LT");
            return;
        } 

        this.setLanguage("en-US");
    }
}