import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';
import { AboutModel } from './about.model';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    downloadInProgreess = false;
    about: AboutModel;


    constructor(private resumeService: ResumeService) { }

    ngOnInit(): void { }

    downloadResume(): void {
        this.downloadInProgreess = true;
        this.resumeService.donloadResume().subscribe((resumeFile: File) => {
            this.downloadDocument(resumeFile);
            this.downloadInProgreess = false;
        }, error => {
            console.error(error);
            this.downloadInProgreess = false;
        });
    }

    private downloadDocument(resume: File) {
        // IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(document, resume.name);
        } else {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(resume);
          link.download = resume.name;
          link.click();
        }
      }
}
