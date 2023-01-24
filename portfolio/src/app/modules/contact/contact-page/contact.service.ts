import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const serverURL: string = environment.serverUrl;

@Injectable({providedIn: 'root'})

export class ContactService {
    constructor(private httpClient: HttpClient) {

    }

    postContact(newContact:any): any {
        return this.httpClient.post(serverURL + "/api/contact/send/email", newContact).toPromise()
    }   
}