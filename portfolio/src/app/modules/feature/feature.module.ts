import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FeatureRoutingModule } from './feature.routing.module';
import { FeatureComponent } from './feature-page/feature.page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class FeatureModule { }
