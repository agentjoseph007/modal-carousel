import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ImageHandlerService} from '../services/image-handler.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {


  showCheck = true;
  constructor(private imageHandlerService: ImageHandlerService) {
   /*
    this.imageHandlerService.statusUpdate.subscribe(
      (status: boolean) => this.showCheck = status
    );
*/
  }

  ngOnInit() {
    console.log('ListContainerComponent showCarousel');
    console.log(this.imageHandlerService.showCarousel);
    console.log('ListContainerComponent');
    console.log(this.showCheck);
  }



}
