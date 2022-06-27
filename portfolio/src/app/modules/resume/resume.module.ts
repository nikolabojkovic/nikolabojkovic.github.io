import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ResumeRoutingModule } from './resume.routing.module';
import { ResumeComponent } from './resume-item/resume.page.component';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FontAwesomeModule
  ]
})
export class ResumeModule { }
