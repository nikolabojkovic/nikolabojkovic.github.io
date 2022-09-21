import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-consulting-page',
  templateUrl: './consulting-page.component.html',
  styleUrls: ['./consulting-page.component.scss']
})

export class ConsultingPageComponent implements OnInit {

  constructor( private headerService: HeaderService, private settingsServices: SettingsService) { }

  ngOnInit(): void {
  }

  closeFeatures(): void {
    this.headerService.unHighlightFeaturesMenuitem();
    this.headerService.homeShadowID.style.backgroundColor = "var(--background-secondary-color)";
  }
}
