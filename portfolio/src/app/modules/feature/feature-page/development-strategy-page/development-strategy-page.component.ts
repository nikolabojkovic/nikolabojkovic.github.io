import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-development-strategy-page',
  templateUrl: './development-strategy-page.component.html',
  styleUrls: ['./development-strategy-page.component.scss']
})

export class DevelopmentStrategyPageComponent implements OnInit {

  constructor( private headerService: HeaderService ) { }

  ngOnInit(): void {
  }

  closeFeatures(): void {
    this.headerService.unHighlightFeaturesMenuitem();
  }
}
