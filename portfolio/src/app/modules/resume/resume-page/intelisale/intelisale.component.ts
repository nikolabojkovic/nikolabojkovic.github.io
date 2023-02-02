import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-intelisale',
  templateUrl: './intelisale.component.html',
  styleUrls: ['./intelisale.component.scss']
})
export class IntelisaleComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.activeResumeMenuItem();
  }
  

  activeResumeMenuItem(): void {
    let sessionItem = window.sessionStorage.getItem("activeResumeMenuItem");
    if(sessionItem != null) {
      this.headerService.setupActiveResumeMenuItem(sessionItem);
    }
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
