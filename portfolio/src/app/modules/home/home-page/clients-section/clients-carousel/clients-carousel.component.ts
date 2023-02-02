import { Component, OnInit, ViewChild } from '@angular/core';
import { faQuoteRight, faStar, faArrowRight, faArrowLeft, faCircle} from '@fortawesome/free-solid-svg-icons';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clients-carousel',
  templateUrl: './clients-carousel.component.html',
  styleUrls: ['./clients-carousel.component.scss']
})

export class ClientsCarouselComponent implements OnInit {

  @ViewChild(CarouselComponent) carousel?: CarouselComponent;

  faQuotes = faQuoteRight;
  faStarIcon = faStar;
  arrowRight= faArrowRight;
  arrowLeft =faArrowLeft
  indicators = faCircle;

  firstSlide: boolean = true;
  secondSlide:boolean = false;
  thirdSlide: boolean = false;
  carouselCycle = {
    interval: 1,
    cycles: 5
  }

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide(): void {
    this.carousel?.nextSlide();
    let currentSlide = Number(this.carousel?.activeSlide);
    this.notificateActiveSlide(currentSlide);
  }

  prevSlide(): void {
    this.carousel?.previousSlide();
    let currentSlide = Number(this.carousel?.activeSlide);
    this.notificateActiveSlide(currentSlide);
  }

  selectSlide(slide: number): void {
    this.carousel?.selectSlide(slide);
    this.notificateActiveSlide(slide);
  }

  notificateActiveSlide(slide: number): void {
    switch(slide) {
      case 0: 
        this.firstSlide = true;
        this.secondSlide = false;
        this.thirdSlide = false;
        break;
      case 1: 
        this.firstSlide = false;
        this.secondSlide = true;
        this.thirdSlide = false;
        break;
      case 2:
        this.firstSlide = false;
        this.secondSlide = false;
        this.thirdSlide = true
        break;
    }
  }

  activeSlideChange(currentSlide: number): void {
    this.notificateActiveSlide(currentSlide);
  }

}