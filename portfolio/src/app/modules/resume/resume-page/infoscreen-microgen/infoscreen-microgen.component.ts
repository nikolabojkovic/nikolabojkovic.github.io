import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-infoscreen-microgen',
  templateUrl: './infoscreen-microgen.component.html',
  styleUrls: ['./infoscreen-microgen.component.scss']
})
export class InfoscreenMicrogenComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  closeResume(): void {
    this.headerService.unHighlightFeaturesMenuitem();
    this.headerService.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
    this.scrollToTop();
  }

  scrollToTop(): void {
    document.documentElement.scrollTop = 0;
  }
}
