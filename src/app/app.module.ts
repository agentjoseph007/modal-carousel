import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContainerComponent } from './shared/list-container/list-container.component';
import { ListComponent } from './shared/list/list.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalContainerComponent } from './shared/modal-container/modal-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    ListComponent,
    CarouselComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
