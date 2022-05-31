import { Component } from "@angular/core";
import { ContactService } from "./contact.service";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.page.component.html",
    styleUrls: ["./contact.page.component.scss"]
})
export class ContactPageComponent {
    constructor(private contactService: ContactService) {

    }
}