import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from './layout/layout.module';
import { TooltipModule } from './tooltip/tooltip.module';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    LayoutModule,
    TooltipModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
