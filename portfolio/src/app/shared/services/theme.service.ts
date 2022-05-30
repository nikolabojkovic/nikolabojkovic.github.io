import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    loadCurrentTheme(): void {
        let theme = localStorage.getItem("Theme");

        if(theme == "Dark") {
            this.setDarkTheme();
            return;
        } 
        
        if (theme == "Light"){
            this.setLightTheme();
            return;
        } 

        this.setDarkTheme();
    }

    setDarkTheme(): void {
        document.getElementsByTagName('body')[0].classList.remove("theme-light");
        document.getElementsByTagName('body')[0].classList.add("theme-dark");
        localStorage.setItem("Theme","Dark");
    }

    setLightTheme(): void {
        document.getElementsByTagName('body')[0].classList.remove("theme-dark");
        document.getElementsByTagName('body')[0].classList.add("theme-light");
        localStorage.setItem("Theme","Light");
    }
}