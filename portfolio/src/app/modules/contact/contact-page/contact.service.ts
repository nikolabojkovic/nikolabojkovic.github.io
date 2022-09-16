import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const serverURL: string = "http://developer-tool.com";

@Injectable({providedIn: 'root'})

export class ContactService {
    constructor(private httpClient: HttpClient) {

    }

    postContact(newContact:any): any {
        return this.httpClient.post(serverURL + "/api/contact/send/email", newContact).toPromise()
    }   
}