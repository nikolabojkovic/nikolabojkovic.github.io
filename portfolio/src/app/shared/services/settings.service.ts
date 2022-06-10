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

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en-US');
        this.settings = new Settings('Dark', 'en-US');
    }
    
    homePageActivated(): void {
        this.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
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

    setDarkTheme(): void {
        document.getElementsByTagName('body')[0].classList.remove("theme-light");
        document.getElementsByTagName('body')[0].classList.add("theme-dark");
        this.settings.setTheme('Dark');
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }

    setLightTheme(): void {
        document.getElementsByTagName('body')[0].classList.remove("theme-dark");
        document.getElementsByTagName('body')[0].classList.add("theme-light");
        this.settings.setTheme('Light');
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }

    setLanguage(language: string): void {
        this.translate.use(language);
        this.settings.setLanguage(language);
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }

    private loadTheme(): void {
        if(this.settings.theme == "Dark") {
            this.setDarkTheme();
            return;
        } 
        
        if (this.settings.theme == "Light"){
            this.setLightTheme();
            return;
        } 

        this.setDarkTheme();
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