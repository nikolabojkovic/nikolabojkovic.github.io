import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/shared/services/header.service';
@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  arrow = faArrowRight;
  datum = new Date();
  activateFeatureSection(): void {
    this.headerService.activateFeatureSection();
  }
}
