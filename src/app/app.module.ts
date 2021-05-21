import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LandingpageComponent } from './view/landingpage/landingpage.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LandingPageModule } from './view/landingpage/landingpage.module';
import { BasesModule } from './view/components/bases.module';
import { RegistrationComponent } from './view/registration/registration.component';
import { RegistrationModule } from './view/registration/registration.module';

// functions for translet service {
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingpageComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingPageModule,
    RegistrationModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    SlickCarouselModule,
    BasesModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
