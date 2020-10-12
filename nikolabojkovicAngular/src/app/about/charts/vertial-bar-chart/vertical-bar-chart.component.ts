import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { Theme } from 'src/app/theme/theme';

@Component({
    selector: 'app-vertical-bar-chart',
    templateUrl: './vertical-bar-chart.component.html',
    styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {

  data: any[] = [
    {
      name: 'FRONTEND',
      value: 3
    },
    {
      name: 'BACKEND',
      value: 6
    }
  ];

  view: any[] =  [350, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Side';
  showYAxisLabel = true;
  yAxisLabel = 'Years of experiance';
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public themeService: ThemeService) { }

  theme =  this.themeService.active;

  ngOnInit(): void {
      this.themeService.themeChanged.subscribe((theme: Theme) => {
          this.theme = theme;
      });
  }
}
