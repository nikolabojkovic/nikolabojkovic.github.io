import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-nul-tien',
  templateUrl: './nul-tien.component.html',
  styleUrls: ['./nul-tien.component.scss']
})
export class NulTienComponent implements OnInit {

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
