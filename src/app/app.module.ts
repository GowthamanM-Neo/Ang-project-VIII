import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalButtonComponent } from './normal-button/normal-button.component';
import { ClickButtonComponent } from './click-button/click-button.component';
import { ErrorButtonComponent } from './error-button/error-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalButtonComponent,
    ClickButtonComponent,
    ErrorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
