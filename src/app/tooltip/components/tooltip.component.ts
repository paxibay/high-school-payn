import { Component, Directive, NgModule, ElementRef, Renderer, ViewChild } from '@angular/core'

@Component({
  selector: 'tooltip',
  templateUrl: 'tooltip.component.html'
})
export class TooltipComponent {
  firstButton: string = 'First button ';
  secondButton: string = 'Second button ';
  isOpen: boolean = false;

  mouseEnter() {
    this.isOpen = true;
    console.log('mouse enter');
  }

  mouseLeave() {
    this.isOpen = false;
    console.log('mouse leave');
  }
}
