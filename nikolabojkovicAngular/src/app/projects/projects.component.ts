import { Component, OnInit } from '@angular/core';
import { Theme } from '../theme/theme';
import { ThemeService } from '../theme/theme.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    theme =  this.themeService.active;

    constructor(public themeService: ThemeService) { }

    ngOnInit(): void {
        this.themeService.themeChanged.subscribe((theme: Theme) => {
            this.theme = theme;
        });
    }
}
