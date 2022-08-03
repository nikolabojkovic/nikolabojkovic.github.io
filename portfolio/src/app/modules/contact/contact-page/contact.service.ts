import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class ContactService {

    constructor(private httpClient: HttpClient) {

    }

    postContact(newContact:any): any {
        return this.httpClient.post("http://developer-tool.com/api/contact/send/email", newContact).toPromise()
    }
    
}