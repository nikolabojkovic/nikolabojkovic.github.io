import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vertical-bar-chart',
    templateUrl: './vertical-bar-chart.component.html',
    styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {

  data: any[] = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    {
      name: 'France',
      value: 7200000
    }
  ];

  view: any[] =  [450, 250];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

    constructor() { }

    ngOnInit(): void { }
}
