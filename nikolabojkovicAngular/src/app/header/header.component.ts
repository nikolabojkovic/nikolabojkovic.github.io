import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { Theme } from '../theme/theme';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

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

    changeTheme(theme: string) {
        // TODO: remove if else
        if (theme === 'light') {
            this.themeService.setLightTheme();
        } else if (theme === 'dark') {
            this.themeService.setDarkTheme();
        }
    }
}
