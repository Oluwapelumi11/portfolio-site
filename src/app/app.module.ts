import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecentAngularComponent } from './recent-angular/recent-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
