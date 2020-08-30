import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    data = [
        {
          name: '.Net',
          value: 3
        },
        {
          name: 'Angular & VueJs',
          value: 2
        },
        {
          name: 'Swift (IOS)',
          value: 0.6
        }
      ];

    view: any[] = [350, 350];

    // options
    gradient = true;
    showLegend = true;
    showLabels = false;
    isDoughnut = true;
    legendPosition = 'below';

    colorScheme = {
        domain: [
            'rgba(20, 155, 32, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)'
        ]
    };

    constructor() { }

    ngOnInit(): void { }
}
