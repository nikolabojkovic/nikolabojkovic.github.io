import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModuleRoutingModule } from './contact-module-routing.module';
import { ContactPageComponent } from './contact-page/contact.page.component';
import { ContactInfoComponent } from './contact-page/contact-info/contact-info.component';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactInfoComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactModuleRoutingModule,
    FontAwesomeModule
  ]
})
export class ContactModule { }
