import { AfterViewInit, Component, OnInit } from "@angular/core";

import { HeaderService } from "src/app/shared/services/header.service";
import { SettingsService } from "src/app/shared/services/settings.service";
import { ContactService } from "./contact.service";

import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { LoaderService } from "src/app/shared/loader/loader.service";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.page.component.html",
    styleUrls: ["./contact.page.component.scss"]
})
export class ContactPageComponent implements OnInit, AfterViewInit {
    facebook =  faFacebookF;
    instagram = faInstagram;
    twitter = faTwitter;
    linkedin = faLinkedinIn;
    checkIcon = faCheck;
    warningIcon =faTriangleExclamation;
    sendingMsg: boolean = false;


    constructor(private contactService: ContactService, 
                private settingsService: SettingsService, 
                private headerService: HeaderService,
                private loaderService: LoaderService) {

    }

    ngOnInit(): void {
        this.headerService.HomePageDeactivated();
    }

    ngAfterViewInit(): void {
        this.loaderService.desibleLoader(); 
    }

    sendMsg(): void {
        let firstName = document.getElementById("fname") as HTMLInputElement;
        let phoneNumber = document.getElementById("pnumber") as HTMLInputElement;
        let email = document.getElementById("email") as HTMLInputElement;
        let subject = document.getElementById("subject") as HTMLInputElement;
        let message = document.getElementById("message") as HTMLInputElement;

        const contactMessage = {
            name : firstName.value,
            phone : phoneNumber.value,
            email: email.value,
            subject : subject.value,
            message : message.value
        }
                 //new 

        this.resetSuccessResponse();
        this.resetRejectResponse();
        let loader = document.getElementById("contact-page-forms-disabled") as HTMLElement;
        this.sendingMsg =true;
        this.postContact(contactMessage);
    }

    displaySuccessResponse(): void {
        let FeedBack = document.getElementById("successApplication") as HTMLElement;
        FeedBack.classList.remove("contact-mail-feedback-done-hide");
        FeedBack.classList.add("contact-mail-feedback-done-show");
    }

    closeSuccessResponse(): void {
        let successElement = document.getElementById("successApplication") as HTMLElement;
        successElement.classList.remove("contact-mail-feedback-done-show");
        successElement.classList.add("contact-mail-feedback-done-hide");
    }

    resetSuccessResponse(): void {
        let successElement = document.getElementById("successApplication") as HTMLElement;
        successElement.classList.remove("contact-mail-feedback-done-hide");
        successElement.classList.add("contact-mail-feedback-done-hide");
    }

    displayRejectResponse(): void {
        let FeedBack = document.getElementById("rejectApplication") as HTMLElement;
        FeedBack.classList.remove("contact-mail-feedback-reject-hide");
        FeedBack.classList.add("contact-mail-feedback-reject-show");
    }

    closeRejectResponse(): void {
        let successElement = document.getElementById("rejectApplication") as HTMLElement;
        successElement.classList.remove("contact-mail-feedback-reject-show");
        successElement.classList.add("contact-mail-feedback-reject-hide");
    }

    resetRejectResponse(): void {
        let successElement = document.getElementById("rejectApplication") as HTMLElement;
        successElement.classList.remove("contact-mail-feedback-reject-hide");
        successElement.classList.add("contact-mail-feedback-reject-hide");
    }

    postContact(newContact: any): any {
        this.contactService.postContact(newContact)
        .then(
            () => {
                this.displaySuccessResponse();
                this.sendingMsg=false;
            }
        )
        .catch(
            () => {
                this.displayRejectResponse();
                this.sendingMsg = false;
            }
        )
    }

}