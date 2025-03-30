import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelViewerComponent } from "./model-viewer/model-viewer.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    ModelViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    PortalModule
  ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
