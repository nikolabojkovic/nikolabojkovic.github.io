import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";
import { SettingsService } from "src/app/shared/services/settings.service";
import { ContactService } from "./contact.service";
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: "app-contact",
    templateUrl: "./contact.page.component.html",
    styleUrls: ["./contact.page.component.scss"]
})
export class ContactPageComponent {
    facebook =  faFacebookF;
    instagram = faInstagram;
    twitter = faTwitter;
    linkedin = faLinkedinIn;
    constructor(private contactService: ContactService, private settingsService: SettingsService, private headerService: HeaderService) {

    }
    ngOnInit(): void {
        this.headerService.HomePageDeactivated();
    }
}