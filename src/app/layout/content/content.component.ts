import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-content',
  templateUrl: 'content.component.html',
  styles: []
})
export class ContentComponent {

  private presentations: string[];

  constructor() {
    this.presentations = new Array<string>(
      'Available Slot',
      'Available Slot',
      'Available Slot',
      'Available Slot',
      'Available Slot',
      'Available Slot',
      'Available Slot',
      'Available Slot'
    );
  }
}


