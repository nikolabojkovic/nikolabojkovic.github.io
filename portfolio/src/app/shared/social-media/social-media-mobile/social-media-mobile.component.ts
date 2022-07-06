import { Component, OnInit } from '@angular/core';
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media-mobile',
  templateUrl: './social-media-mobile.component.html',
  styleUrls: ['./social-media-mobile.component.scss']
})
export class SocialMediaMobileComponent implements OnInit {

  constructor() { }

  
  facebook =  faFacebookF;
  instagram = faInstagram; 
  twitter = faTwitter;
  linkedin = faLinkedinIn;

  ngOnInit(): void {
  }

}
