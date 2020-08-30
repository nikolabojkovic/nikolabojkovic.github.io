import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from './resume.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class ResumeService {

    constructor(private http: HttpClient) { }

    donloadResume(): Observable<File> {
        return this.http.get<Resume>('http://developer-tool.com/api/cv/download')
                   .pipe(map((resume: Resume) => this.convertToFile(resume)));
    }

    private convertToFile(cv: Resume) {
        const blob = this.dataToBlob(cv.document);
        return new File([blob], cv.name, {type: cv.type});
    }

    private dataToBlob(data: string) {
        const bytes = [];
        const utf8 = atob(data);

        for (let i = 0; i < utf8.length; i++) {
            bytes.push(utf8.charCodeAt(i));
        }

        return new Blob([new Uint8Array(bytes)]);
    }
}
