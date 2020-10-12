import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { Theme } from '../theme/theme';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
    theme =  this.themeService.active;
    fromYear: string;
    currentYear: string;
    socialNetworks: any[];

    constructor(public themeService: ThemeService) { }

    ngOnInit(): void {
        this.themeService.themeChanged.subscribe((theme: Theme) => {
            this.theme = theme;
        });
        this.fromYear = '2019';
        this.currentYear = new Date().getFullYear() + '';
        this.socialNetworks = [
            { name: 'linkedin', hrof: 'https://www.linkedin.com/in/nikola-bojkovic-4b4b2196/'},
            { name: 'github', hrof: 'https://github.com/nikolabojkovic'},
         //   { name: 'icomoon-up-work', hrof: 'https://www.upwork.com/freelancers/~018109885d206e601f'},
            { name: 'facebook', hrof: 'https://www.facebook.com/nikolabojkovic6'},
            { name: 'twitter', hrof: 'https://plus.google.com/101001035036525248332'}
        ];
    }

    ngOnDestroy(): void {
        this.themeService.themeChanged.unsubscribe();
    }
}
