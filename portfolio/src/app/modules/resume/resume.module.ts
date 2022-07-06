import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ResumeRoutingModule } from './resume.routing.module';
import { ResumeComponent } from './resume-page/resume.page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class ResumeModule { }
