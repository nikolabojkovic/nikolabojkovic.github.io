import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PieChartComponent } from './about/charts/pie-chart/pie-chart.component';
import { VerticalBarChartComponent } from './about/charts/vertial-bar-chart/vertical-bar-chart.component';
import { ResumeService } from './about/resume.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PieChartComponent,
    VerticalBarChartComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxChartsModule,
  ],
  providers: [ResumeService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
