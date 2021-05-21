import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from "@angular/core";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { HomeComponent } from "./home/home.component";
import { LandingPageRoutingModule } from "./landingpage.routing.module";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import { TranslateModule } from '@ngx-translate/core';

import { BasesModule } from './../components/bases.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        TournamentsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        LandingPageRoutingModule,
        SlickCarouselModule,
        BasesModule,
        TranslateModule,
        FontAwesomeModule

    ],
    exports: [TournamentsComponent,
        HomeComponent]
})

export class LandingPageModule { }