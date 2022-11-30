import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ResumeRoutingModule } from './resume.routing.module';
import { ResumeComponent } from './resume-page/resume.page.component';
import { TranslateModule } from '@ngx-translate/core';
import { OrionInovationComponent } from './resume-page/orion-inovation/orion-inovation.component';
import { IntelisaleComponent } from './resume-page/intelisale/intelisale.component';
import { NulTienComponent } from './resume-page/nul-tien/nul-tien.component';
import { InfoscreenMicrogenComponent } from './resume-page/infoscreen-microgen/infoscreen-microgen.component';
import { UniversityComponent } from './resume-page/university/university.component';

@NgModule({
  declarations: [
    ResumeComponent,
    OrionInovationComponent,
    IntelisaleComponent,
    NulTienComponent,
    InfoscreenMicrogenComponent,
    UniversityComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class ResumeModule { }
