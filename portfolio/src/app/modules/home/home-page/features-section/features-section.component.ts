import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/shared/services/header.service';
import { SettingsService } from 'src/app/shared/services/settings.service';
@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {

  constructor(private headerService: HeaderService, private settingsServices: SettingsService) { }

  ngOnInit(): void {
  }

  arrow = faArrowRight;
  datum = new Date();
  activateFeatureSection(): void {
    this.headerService.activateFeatureSection();
    console.log("cl");
    this.headerService.homeShadowID.style.backgroundColor = "var(--background-primary-color)";
  }
}
