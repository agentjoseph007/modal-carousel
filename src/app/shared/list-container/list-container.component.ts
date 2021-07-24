import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {ImageHandlerService} from '../services/image-handler.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from '../carousel/carousel.component';
import {ModalContainerComponent} from '../modal-container/modal-container.component';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  @ViewChild('showHere', {static: false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  showCarousel = false;
  constructor(private imageHandlerService: ImageHandlerService, private resolver: ComponentFactoryResolver) {
    // this.imageHandlerService.statusUpdate.subscribe(
    //   (status: boolean) => {
    //     console.log('ListContainerComponent constructor listener begin');
    //     // this.showHidenCarousel();
    //     console.log('ListContainerComponent constructor listener end');
    //
    //   }
    // );
  }

  ngOnInit() {
    console.log('ListContainerComponent begin');
    console.log('ListContainerComponent end');
  }

  showHidenCarousel() {
    const childComponent = this.resolver.resolveComponentFactory(ModalContainerComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }



}
