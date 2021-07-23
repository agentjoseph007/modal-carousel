import { Component, OnInit } from '@angular/core';
import {ImageHandlerService} from '../services/image-handler.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private imageHandlerService: ImageHandlerService) { }

  ngOnInit() {
  }

  selectSlide(index: number) {
    console.log('this.imageHandlerService');


    this.imageHandlerService.selectedIndex = index;
    this.imageHandlerService.showCarousel = true;
    console.log('this.imageHandlerService' , this.imageHandlerService);
    this.imageHandlerService.statusUpdate.emit(true);

  }
}
