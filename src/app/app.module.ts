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
import { BaseComponent } from './view/components/base/base.component';
import { NavbarComponent } from './view/components/navbar/navbar.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatchCardComponent } from './view/components/match-card/match-card.component';
import { PostAdsComponent } from './view/components/post-ads/post-ads.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// functions for translet service {
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingpageComponent,
    BaseComponent,
    NavbarComponent,
    FooterComponent,
    MatchCardComponent,
    PostAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    SlickCarouselModule,
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
