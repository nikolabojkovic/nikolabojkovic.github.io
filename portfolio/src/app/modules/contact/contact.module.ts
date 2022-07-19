import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './contact-page/contact.page.component';
import { ContactInfoComponent } from './contact-page/contact-info/contact-info.component';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ContactPageComponent,
    ContactInfoComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule,
    TranslateModule,
    FormsModule,
    HomeModule
  ],
  exports: [
    HomeModule
  ]
})
export class ContactModule { }
