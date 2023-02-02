import { Component, OnInit } from '@angular/core';
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaStandardComponent implements OnInit {

  constructor() { }

  facebook =  faFacebookF;
  instagram = faInstagram; 
  twitter = faTwitter;
  linkedin = faLinkedinIn;

  ngOnInit(): void {
  }
}
