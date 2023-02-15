import { AfterViewInit, Component } from "@angular/core";
import { SettingsService } from "../../../shared/services/settings.service";
import { HomeService } from "./home.service";
import { OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { LoaderService } from "src/app/shared/loader/loader.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.page.component.html",
    styleUrls: ["./home.page.component.scss"]
})
export class HomePageComponent implements OnInit, AfterViewInit {

    constructor(private settingsService: SettingsService, 
                private homeService: HomeService, private loaderService: LoaderService) {
                  
      }
      
      ngOnInit(): void {

      }
    
      ngOnDestroy(): void {

      }

      ngAfterViewInit(): void {
        this.loaderService.desibleLoader(); 
      }
}