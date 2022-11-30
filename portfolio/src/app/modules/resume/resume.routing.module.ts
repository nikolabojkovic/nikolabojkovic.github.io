import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoscreenMicrogenComponent } from './resume-page/infoscreen-microgen/infoscreen-microgen.component';
import { IntelisaleComponent } from './resume-page/intelisale/intelisale.component';
import { NulTienComponent } from './resume-page/nul-tien/nul-tien.component';
import { OrionInovationComponent } from './resume-page/orion-inovation/orion-inovation.component';
import { ResumeComponent } from './resume-page/resume.page.component';
import { UniversityComponent } from './resume-page/university/university.component';



const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: "orion-inovation", component: OrionInovationComponent},
  { path: "intelisale", component: IntelisaleComponent},
  { path: "nultien", component: NulTienComponent},
  { path: "infoscreen-microgen", component: InfoscreenMicrogenComponent},
  { path: "university", component: UniversityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
