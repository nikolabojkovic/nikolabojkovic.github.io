import { Component, OnInit } from '@angular/core';
import { BsModalService } from "ngx-bootstrap/modal";
import { BusinessComponent } from './modals/business/business.component';
import { ConsultingComponent } from './modals/consulting/consulting.component';
import { DevelopmentComponent } from './modals/development/development.component';
import { LeadershipComponent } from './modals/leadership/leadership.component';
import { MentoringComponent } from './modals/mentoring/mentoring.component';
import { SoftwareArchitectureComponent } from './modals/software-architecture/software-architecture.component';
import { TestComponent } from './modals/test/test.component';
@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {

  constructor( private modalService: BsModalService) {
  }
  
  ngOnInit(): void {
  }

  displaySoftwareArchitecture(): void {
    this.modalService.show(SoftwareArchitectureComponent);
  }

  displayDevelopment(): void {
    this.modalService.show(DevelopmentComponent);
  }

  displayMentoring(): void {
    this.modalService.show(MentoringComponent);
  }

  displayLeadership(): void {
    this.modalService.show(LeadershipComponent);
  }

  displayConsulting(): void {
    this.modalService.show(ConsultingComponent);
  }

  displayBusiness(): void {
    this.modalService.show(BusinessComponent);
  }

}
