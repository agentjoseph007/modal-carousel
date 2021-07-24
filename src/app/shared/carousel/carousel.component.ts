import {AfterViewInit, Component, ComponentRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NgbCarousel, NgbModal, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
import {ImageHandlerService} from '../services/image-handler.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit  {

  @ViewChildren('template') template: QueryList<any>;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  // @ViewChildren('refCarousel') carousel: QueryList<NgbCarousel>;
  // @ViewChild('refCarousel', {static : true}) carousel: NgbCarousel;


  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  isFocused = false;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  @Input() isShowed: boolean;

  activeIndex: string;

  constructor(private imageHandlerService: ImageHandlerService) {
    console.log('CarouselComponent');
    console.log(this.imageHandlerService.selectedIndex);
    this.activeIndex = this.imageHandlerService.selectedIndex.toString();
  }


  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.activeIndex);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.activeIndex);
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
