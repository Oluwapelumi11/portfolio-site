import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecentAngularComponent } from './recent-angular/recent-angular.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentAngularComponent,
    CertificationsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
