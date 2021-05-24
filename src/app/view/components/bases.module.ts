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
import { RouterModule } from "@angular/router";
import { SplitScreenComponent } from './split-screen/split-screen.component';
import { LatestMatchesStatusComponent } from './latest-matches-status/latest-matches-status.component';
import { WidgetGameComponent } from './widget-game/widget-game.component';
import { WidgetStandingComponent } from './widget-standing/widget-standing.component';
import { WidgetStatisticsComponent } from './widget-statistics/widget-statistics.component';
import { SlickCarouselModule } from "ngx-slick-carousel";
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
    declarations: [
        BaseComponent,
        NavbarComponent,
        FooterComponent,
        MatchCardComponent,
        PostAdsComponent,
        TournamentsInfoCardComponent,
        SplitScreenComponent,
        LatestMatchesStatusComponent,
        WidgetGameComponent,
        WidgetStandingComponent,
        WidgetStatisticsComponent,
        SidebarComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        TranslateModule,
        FontAwesomeModule,
        MatToolbarModule,
        MatButtonModule,
        MatRippleModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        SlickCarouselModule,

    ],
    exports: [
        BaseComponent,
        NavbarComponent,
        FooterComponent,
        MatchCardComponent,
        PostAdsComponent,
        TournamentsInfoCardComponent,
        SplitScreenComponent,
        LatestMatchesStatusComponent,
        WidgetGameComponent,
        WidgetStandingComponent,
        WidgetStatisticsComponent,
        SidebarComponent,
        LoaderComponent
    ]
})

export class BasesModule { }