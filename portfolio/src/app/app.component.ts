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
     if(event.url === "/home" || event.url === "/" || event.url === "/home#featuresSection" || event.url === "/home#resumeSection" || event.url == '/home#portfolioSection' || event.url === '/home#clientsSection'){
        headerService.activateHomeBanner();
     } else {
        headerService.HomePageDeactivated();
     }

     this.menuList(event.url);
     this.subMenuListFeatures(event.url);
     this.subMenuListResume(event.url);
   });
  }

  menuList(url: any): void {
    switch(url) {
      case '/': 
      case '/home': this.headerService.$ActiveMenuItem.next('home'); break;
      case '/contact': this.headerService.$ActiveMenuItem.next('contact'); break;
      default: 
        if(url.startsWith('/features')) {
          this.headerService.$ActiveMenuItem.next('features');
        }

        if(url.startsWith('/resume')) {
          this.headerService.$ActiveMenuItem.next('resume');
        }
        
        if(url.startsWith('/home#')) {
          this.headerService.$ActiveMenuItem.next('home');
        }
     }
  }

  subMenuListFeatures(url: any): void {
    switch(url) {
      case '/features/development-strategy': this.headerService.$ActiveFeaturesMenuItem.next('developmentStrategy'); break;
      case '/features/software-architecture': this.headerService.$ActiveFeaturesMenuItem.next('softwareArchitecture'); break;
      case '/features/project-implementation': this.headerService.$ActiveFeaturesMenuItem.next('projectImplementation'); break;
      case '/features/mentoring': this.headerService.$ActiveFeaturesMenuItem.next('mentoring'); break;
      case '/features/leadership': this.headerService.$ActiveFeaturesMenuItem.next('leadership'); break;
      case '/features/consulting': this.headerService.$ActiveFeaturesMenuItem.next('consulting'); break;
      default: 
     }
  }

  subMenuListResume(url: any): void {
    switch(url) {
      case '/resume/university': this.headerService.$ActiveResumeMenuItem.next('university'); break;
      case '/resume/infoscreen-microgen':  this.headerService.$ActiveResumeMenuItem.next('infoscreenMicrogen'); break;
      case '/resume/orion-inovation': this.headerService.$ActiveResumeMenuItem.next('orionInovation'); break;
      case '/resume/intelisale': this.headerService.$ActiveResumeMenuItem.next('intelisale'); break;
      case '/resume/nultien': this.headerService.$ActiveResumeMenuItem.next('nultien'); break;
      default: 
     }
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
