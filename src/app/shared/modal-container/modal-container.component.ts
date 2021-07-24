import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {ImageHandlerService} from '../services/image-handler.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent {
  closeResult = '';

  @ViewChild('content', {static : true}) content: any;

  constructor(private modalService: NgbModal, private imageHandlerService: ImageHandlerService) {
    this.imageHandlerService.statusUpdate.subscribe((status: boolean) => {
      console.log('ModalContainerComponent constructor listener begin');
      if (status === true) {
        this.modalService.open(this.content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.imageHandlerService.showCarousel = false;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.imageHandlerService.showCarousel = false;
        });
      }
      console.log('ModalContainerComponent constructor listener end');
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
