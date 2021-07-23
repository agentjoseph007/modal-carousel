import {EventEmitter, Injectable} from '@angular/core';

@Injectable( )
export class ImageHandlerService {
  private _selectedIndex = 0;
  private _showCarousel = false;

  statusUpdate = new EventEmitter<boolean>();
  constructor() { }

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  set selectedIndex(value: number) {
    this._selectedIndex = value;
  }

  get showCarousel(): boolean {
    return this._showCarousel;
  }

  set showCarousel(value: boolean) {
    this._showCarousel = value;
  }
}
