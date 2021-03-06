import { Component } from '@angular/core';
import {ImageHandlerService} from './shared/services/image-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageHandlerService]
})
export class AppComponent {
  title = 'my-first-project';
  showCheck = false;

  setFocusSlider(): void{
    this.showCheck = !this.showCheck;
  }

  removeFocusSlider(): void {
    this.showCheck = !this.showCheck;
  }
}
