import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  selectedModule = null;
  modules: Array<any> = [
    { key: '/root', value: 'Credits' },
    { key: '/all', value: 'All' },
    { key: '/earned', value: 'Earned' },
    { key: '/planned', value: 'Planned' },
    { key: '/remaining', value: 'Remaining' }
  ];

  constructor() { }

  onChangeModule(newModule?: string) {
    this.selectedModule = newModule;
  }

  ngOnInit() {
  }
}
