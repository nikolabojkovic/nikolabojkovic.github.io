export class Settings {

    theme: string;
    language: string;

    constructor(theme: string, language: string) {
        this.theme = theme;
        this.language = language;
    }

    setTheme(theme: string): void {
         this.theme = theme; 
    }

    setLanguage(language: string): void {
        this.language = language;
    }

    resetSettings(): void {
        this.theme = 'Dark';
        this.language = 'en-US';
    }
}