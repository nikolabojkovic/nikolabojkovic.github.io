import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { faFacebookF,faInstagram,faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit, AfterViewInit {
  interval: any;
  WIDE_SCREEEN_SIZE: number = 768;
  facebook =  faFacebookF;
  instagram = faInstagram; 
  twitter = faTwitter;
  linkedin = faLinkedinIn;
  @ViewChild('text') animationText : ElementRef | undefined

  constructor(private elRef: ElementRef, private loaderService: LoaderService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
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
      let text = document.getElementById("text") as HTMLElement;
      const animationContainer = document.getElementById('animation-container') as HTMLElement;
      const hoverWidth = animationContainer.offsetWidth - text.offsetWidth - 5;
      rootElement.style.setProperty("--text-shadow-length" , hoverWidth + '');
      shadow.style.borderLeft = "0px solid transparent";
      shadow.style.animationName = "text_hoverable"
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
            const animationContainer = document.getElementById('animation-container') as HTMLElement;
            const hoverWidth = animationContainer.offsetWidth - text.offsetWidth - 5;
            r.style.setProperty("--text-shadow-length", hoverWidth + 'px');
          }
          break;

          case 2: text.innerHTML = row[1];
          textInRow = 3;
          if(bigScreen) {
            const animationContainer = document.getElementById('animation-container') as HTMLElement;
            const hoverWidth = animationContainer.offsetWidth - text.offsetWidth - 5;
            r.style.setProperty("--text-shadow-length", hoverWidth + 'px');
          }
          break;

          case 3: text.innerHTML = row[2];
          textInRow = 1;
          if(bigScreen) {
            const animationContainer = document.getElementById('animation-container') as HTMLElement;
            const hoverWidth = animationContainer.offsetWidth - text.offsetWidth - 5;
            r.style.setProperty("--text-shadow-length", hoverWidth + 'px');
          }
          break;
        }
      },5000)
  }

  resetAnimations(): void {
    this.loaderService.$loading.subscribe((isLoading) => {
      if (!isLoading) {
        let r = document.querySelector(':root') as HTMLElement;
        let text = this.elRef.nativeElement.querySelector("#text");
        const animationContainer = this.elRef.nativeElement.querySelector('#animation-container');
        const hoverWidth = animationContainer.offsetWidth - text.offsetWidth - 5;
        r.style.setProperty("--text-shadow-length", hoverWidth + 'px');
      }
    });
  }
}
