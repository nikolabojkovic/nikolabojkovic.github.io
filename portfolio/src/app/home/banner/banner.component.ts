import { Component, OnInit,OnDestroy } from '@angular/core';
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  interval: any;
  WIDE_SCREEEN_SIZE: number = 1500;

  facebook =  faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;
  linkedin = faLinkedinIn;
  ngOnInit(): void {

    this.resetAnimations();
    this.changeBannerText();
    this.isItBigScreen();

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  isItBigScreen(): boolean {
    let rootElement = document.querySelector(':root') as HTMLElement;
    let shadow = document.getElementById("shadowText") as HTMLElement;
    if(window.innerWidth < this.WIDE_SCREEEN_SIZE) {
      rootElement.style.setProperty("--text-shadow-length" , "0%");
      shadow.style.borderLeft = "0px solid transparent";
      return false;
    } else {
      return true;
    }
  }

  changeBannerText(): void {
    let text = document.getElementById("text") as HTMLElement;
    let textInRow = 2;
    let r = document.querySelector(':root') as HTMLElement;
    var bigScreen = this.isItBigScreen();

    let row = ["a Professional Software Developer.","a Software Architect.","a Mentor."];
      this.interval = setInterval(function() {
        var rootStyle = getComputedStyle(r);
        switch(textInRow) {
          case 1: text.innerHTML = row[0];
          textInRow = 2;
          if(bigScreen) {
            r.style.setProperty("--text-shadow-length", "21%");
          }
          break;

          case 2: text.innerHTML = row[1];
          textInRow = 3;
          if(bigScreen) {
            r.style.setProperty("--text-shadow-length", "52%");
          }
          break;

          case 3: text.innerHTML = row[2];
          textInRow = 1;
          if(bigScreen) {
            r.style.setProperty("--text-shadow-length", "79%");
          }
          break;
        }
      },5000)
  }

  resetAnimations(): void {
      let r = document.querySelector(':root') as HTMLElement;
      r.style.setProperty("--text-shadow-length", "22%");
      console.log('clear');
  }

}
