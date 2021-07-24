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
    console.log('selectSlide begin');
    this.imageHandlerService.selectedIndex = index;
    this.imageHandlerService.showCarousel = true;
    this.imageHandlerService.statusUpdate.emit(true);
    console.log('selectSlide end');

  }
}
