import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class ContactService {

    constructor(private httpClient: HttpClient) {

    }

    getContacts(): any {
        this.httpClient.get("http://localhost:4000/contacts").toPromise()
        .then(
            (data) => {
                console.log(data);
            }
        )
    }

    postContact(newContact:any): any {
        return this.httpClient.post("http://localhost:4000/contacts", newContact).toPromise()
    }
    
}