import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-nul-tien',
  templateUrl: './nul-tien.component.html',
  styleUrls: ['./nul-tien.component.scss']
})
export class NulTienComponent implements OnInit, AfterViewInit {

  constructor(private headerService: HeaderService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.activeResumeMenuItem();
  }
  
  ngAfterViewInit(): void {
    this.loaderService.desibleLoader(); 
  }

  activeResumeMenuItem(): void {
    let sessionItem = window.sessionStorage.getItem("activeResumeMenuItem");
    this.headerService.setupActiveResumeMenuItem("nultien");
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
