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


@NgModule({
  declarations: [
    FeaturesSectionComponent,
    BannerComponent,
    PortfolioSectionComponent,
    ResumeSectionComponent,
    ClientsSectionComponent,
    HomePageComponent,
    SocialMediaStandardComponent,
    SocialMediaMobileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    TranslateModule,
    FeatureModule
  ],
  exports: [
    SocialMediaStandardComponent,
    SocialMediaMobileComponent
  ]
})
export class HomeModule { }
