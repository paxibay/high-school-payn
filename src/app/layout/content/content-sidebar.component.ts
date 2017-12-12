import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-sidebar',
  templateUrl: 'content-sidebar.component.html',
  styles: []
})
export class ContentSidebarComponent {
  courses: Array<course>;
  languages: Array<language>;
  availabeSlots: string[];

  constructor() {
    this.courses = [
      { name: 'English', field2: 'ENG1P1', field3: 'English 9', field4: '1 cr.' },
      { name: 'Functions', field2: 'MAT1U1', field3: 'Math 9', field4: '1 cr.' }
    ];

    this.languages = [
      { id: 1, name: 'Add Science 9', credit: '1 cr.' },
      { id: 2, name: 'Add Geography', credit: '1 cr.'  },
      { id: 3, name: 'Add French', credit: '1 cr.'  },
      { id: 4, name: 'Add Eletive', credit: '16 credits remaining'  },
    ];


    this.availabeSlots = new Array<string>(
      'Available Slot',
      'Available Slot'
    );
  }
}

export class language {
  constructor(
    public id?: number,
    public name?: string,
    public credit?: string
  ) { }
}

export class course {
  constructor(
    public name?: string,
    public field2?: string,
    public field3?: string,
    public field4?: string
  ) { }
}
