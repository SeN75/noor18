import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { BaseComponent } from "./base/base.component";
import { FooterComponent } from "./footer/footer.component";
import { MatchCardComponent } from "./match-card/match-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PostAdsComponent } from "./post-ads/post-ads.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from "@angular/platform-browser";


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TournamentsInfoCardComponent } from './tournaments-info-card/tournaments-info-card.component';
@NgModule({
    declarations: [
        BaseComponent,
        NavbarComponent,
        FooterComponent,
        MatchCardComponent,
        PostAdsComponent,
        TournamentsInfoCardComponent],
    imports: [
        BrowserModule,
        TranslateModule,
        FontAwesomeModule,
        MatToolbarModule,
        MatButtonModule,
        MatRippleModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
    ],
    exports: [
        BaseComponent,
        NavbarComponent,
        FooterComponent,
        MatchCardComponent,
        PostAdsComponent,
        TournamentsInfoCardComponent
    ]
})

export class BasesModule { }