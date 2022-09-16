import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-software-architecture-page',
  templateUrl: './software-architecture-page.component.html',
  styleUrls: ['./software-architecture-page.component.scss']
})

export class SoftwareArchitecturePageComponent implements OnInit {

  constructor( private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  closeFeatures(): void {
    this.headerService.unHighlightFeaturesMenuitem();
  }
}
