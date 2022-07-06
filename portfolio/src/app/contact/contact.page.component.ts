import { Component } from "@angular/core";
import { ContactService } from "./contact.service";
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
    selector: "app-contact",
    templateUrl: "./contact.page.component.html",
    styleUrls: ["./contact.page.component.scss"]
})
export class ContactPageComponent {
    constructor(private contactService: ContactService) {

    }
    facebook =  faFacebookF;
    instagram = faInstagram;
    twitter = faTwitter;
    linkedin = faLinkedinIn;
}
