import { Component } from "@angular/core";
import { SettingsService } from "../../../shared/services/settings.service";
import { HomeService } from "./home.service";
import { OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core";
@Component({
    selector: "app-home",
    templateUrl: "./home.page.component.html",
    styleUrls: ["./home.page.component.scss"]
})
export class HomePageComponent {

    constructor(private settingsService: SettingsService, 
                private homeService: HomeService) {
                  
      }
      
      ngOnInit(): void {
    //    this.settingsService.loadSettings();
      }
    
 /*     onEnglishLanguageClick(): void {
        this.settingsService.setLanguage('en-US');
      }
    
      onSerbianLanguageClick(): void {
        this.settingsService.setLanguage('srb-LT');
      }
    
      onDarkThemeClick(): void {
        this.settingsService.setDarkTheme(0);
      }
    
      onLightThemeClick(): void {
        this.settingsService.setLightTheme(0);
      }
*/
      ngOnDestroy(): void {
        console.log("OnDestroy executed");
      }
}