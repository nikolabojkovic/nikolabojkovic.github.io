import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FeatureRoutingModule } from './feature.routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SoftwareArchitecturePageComponent } from './feature-page/software-architecture-page/software-architecture-page.component';
import { DevelopmentStrategyPageComponent } from './feature-page/development-strategy-page/development-strategy-page.component';
import { LeadershipPageComponent } from './feature-page/leadership-page/leadership-page.component';
import { MentoringPageComponent } from './feature-page/mentoring-page/mentoring-page.component';
import { ProjectImplementationPageComponent } from './feature-page/project-implementation-page/project-implementation-page.component';
import { ConsultingPageComponent } from './feature-page/consulting-page/consulting-page.component';

@NgModule({
  declarations: [
    ConsultingPageComponent,
    DevelopmentStrategyPageComponent,
    LeadershipPageComponent,
    MentoringPageComponent,
    ProjectImplementationPageComponent,
    SoftwareArchitecturePageComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    
  ]
})
export class FeatureModule { }
