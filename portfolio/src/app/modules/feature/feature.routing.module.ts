import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingPageComponent } from './feature-page/consulting-page/consulting-page.component';
import { DevelopmentStrategyPageComponent } from './feature-page/development-strategy-page/development-strategy-page.component';
import { LeadershipPageComponent } from './feature-page/leadership-page/leadership-page.component';
import { MentoringPageComponent } from './feature-page/mentoring-page/mentoring-page.component';
import { ProjectImplementationPageComponent } from './feature-page/project-implementation-page/project-implementation-page.component';
import { SoftwareArchitecturePageComponent } from './feature-page/software-architecture-page/software-architecture-page.component';



const routes: Routes = [
  { path: 'consulting', component: ConsultingPageComponent  },
  { path: 'development-strategy', component: DevelopmentStrategyPageComponent  },
  { path: 'leadership', component: LeadershipPageComponent  },
  { path: 'mentoring', component: MentoringPageComponent  },
  { path: 'project-implementation', component: ProjectImplementationPageComponent  },
  { path: 'software-architecture', component: SoftwareArchitecturePageComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
