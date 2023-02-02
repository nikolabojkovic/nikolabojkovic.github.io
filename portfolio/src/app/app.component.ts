import { Component,HostListener,OnInit} from '@angular/core';
import { Event, RouterEvent, Router} from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from './shared/services/header.service';
import { SettingsService } from './shared/services/settings.service';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Portfolio';
  storage = 'Storage is place where you store an information';
  scrollButtonStatus = false;
  arrow = faArrowRight;
  
  ngOnInit(): void {
    this.headerService.homeShadowID = this.sendHomeShadow();
  }

  constructor(private settingsService: SettingsService, private headerService: HeaderService, public router: Router) {
    this.settingsService.loadSettings();
    router.events.pipe(
      filter((event: Event): event is RouterEvent => event instanceof RouterEvent)
   ).subscribe((event: RouterEvent) => {
     if(event.url === "/home" || event.url === "/" || event.url === "/home#featuresSection" || event.url === "/home#resumeSection"){
        headerService.activateHomeBanner();
     } else {
        headerService.HomePageDeactivated();
     }
   });
  }

  sendHomeShadow(): HTMLElement {
      return document.getElementById("siteContainerTop") as HTMLElement;
  }

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
}
