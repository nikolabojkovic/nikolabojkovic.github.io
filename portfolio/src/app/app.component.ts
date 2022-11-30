import { Component,HostListener,OnInit} from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from './shared/services/header.service';
import { SettingsService } from './shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  storage = 'Storage is place where you store an information';
  scrollButtonStatus = false;
  arrow = faArrowRight;
  
  ngOnInit(): void {
    this.headerService.homeShadowID = this.sendHomeShadow();
  }


  constructor(private settingsService: SettingsService, private headerService: HeaderService) {
    this.settingsService.loadSettings();
  }

  sendHomeShadow(): HTMLElement {
      return document.getElementById("siteContainerTop") as HTMLElement;
  }
  
  // Scroll event

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if(document.documentElement.scrollTop > 1000) {
      this.scrollButtonStatus = true;
    } else {
      this.scrollButtonStatus = false;
    }
  }

  // Scroll event

  // faCoffee = faCoffee;                   font-awesome variable
}
