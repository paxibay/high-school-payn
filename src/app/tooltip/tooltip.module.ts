import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TooltipComponent } from './components/tooltip.component';
import { TooltipButtonComponent } from './components/tooltip-button.component';

export const IMPORTS_MODULES = [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  NgbModule
];

const COMPONENTS = [
  TooltipComponent,
  TooltipButtonComponent
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [...COMPONENTS],
  exports: [TooltipComponent],
  providers: []
})
export class TooltipModule {}
