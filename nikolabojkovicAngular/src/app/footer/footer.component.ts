import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { Theme } from '../theme/theme';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
    constructor(public themeService: ThemeService) { }

    theme =  this.themeService.active;

    ngOnInit(): void {
        this.themeService.themeChanged.subscribe((theme: Theme) => {
            this.theme = theme;
        });
    }

    ngOnDestroy(): void {
        this.themeService.themeChanged.unsubscribe();
    }
}
