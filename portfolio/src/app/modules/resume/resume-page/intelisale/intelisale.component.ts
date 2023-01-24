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
