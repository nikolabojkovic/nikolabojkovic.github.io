import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FeatureRoutingModule } from './feature.routing.module';
import { FeatureComponent } from './feature-item/feature.page.component';

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FontAwesomeModule
  ]
})
export class FeatureModule { }
