import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tooltip-button',
  templateUrl: 'tooltip-button.component.html',
  styleUrls: ['tooltip-button.component.scss']
})
export class TooltipButtonComponent {

  @Input()
  buttonLabel: string = 'Click me to open a tooltip';

  @Input()
  tooltip: string;

  @Input()
  isOpen: boolean = false;

  //@Output()
  //click = new EventEmitter<string>();
}
