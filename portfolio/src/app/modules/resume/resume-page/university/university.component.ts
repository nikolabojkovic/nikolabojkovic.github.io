import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit, AfterViewInit {

  constructor(private headerService: HeaderService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.activeResumeMenuItem();
  }
  
  ngAfterViewInit(): void {
    this.loaderService.desibleLoader(); 
  }

  activeResumeMenuItem(): void {
    let sessionItem = window.sessionStorage.getItem("activeResumeMenuItem");
    this.headerService.setupActiveResumeMenuItem("university");
  }
  closeResume(): void {
    this.headerService.unHighlightFeaturesMenuitem();
    this.scrollToTop();
    this.headerService.resetResumeMenuItems();
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
  
}

