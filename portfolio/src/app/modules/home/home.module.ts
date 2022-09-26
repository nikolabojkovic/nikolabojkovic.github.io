import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { FeaturesSectionComponent } from './home-page/features-section/features-section.component';
import { PortfolioSectionComponent } from './home-page/portfolio-section/portfolio-section.component';
import { ResumeSectionComponent } from './home-page/resume-section/resume-section.component';
import { ClientsSectionComponent } from './home-page/clients-section/clients-section.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home.page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaStandardComponent } from 'src/app/shared/social-media/social-media-standard/social-media.component';
import { SocialMediaMobileComponent } from 'src/app/shared/social-media/social-media-mobile/social-media-mobile.component';
import { FeatureModule } from '../feature/feature.module';
import { ModalModule } from "ngx-bootstrap/modal";
import { TestComponent } from './home-page/portfolio-section/modals/test/test.component';
import { SoftwareArchitectureComponent } from './home-page/portfolio-section/modals/software-architecture/software-architecture.component';
import { DevelopmentComponent } from './home-page/portfolio-section/modals/development/development.component';
import { MentoringComponent } from './home-page/portfolio-section/modals/mentoring/mentoring.component';
import { LeadershipComponent } from './home-page/portfolio-section/modals/leadership/leadership.component';
import { ConsultingComponent } from './home-page/portfolio-section/modals/consulting/consulting.component';
import { BusinessComponent } from './home-page/portfolio-section/modals/business/business.component';

@NgModule({
  declarations: [
    FeaturesSectionComponent,
    BannerComponent,
    PortfolioSectionComponent,
    ResumeSectionComponent,
    ClientsSectionComponent,
    HomePageComponent,
    SocialMediaStandardComponent,
    SocialMediaMobileComponent,
    TestComponent,
    SoftwareArchitectureComponent,
    DevelopmentComponent,
    MentoringComponent,
    LeadershipComponent,
    ConsultingComponent,
    BusinessComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    TranslateModule,
    FeatureModule,
    ModalModule.forRoot()
  ],
  exports: [
    SocialMediaStandardComponent,
    SocialMediaMobileComponent
  ],
  entryComponents: [TestComponent]
})
export class HomeModule { }
