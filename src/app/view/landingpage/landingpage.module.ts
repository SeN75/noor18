import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from "@angular/core";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { HomeComponent } from "./home/home.component";
import { LandingPageRoutingModule } from "./landingpage.routing.module";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import { TranslateModule } from '@ngx-translate/core';

import { BasesModule } from './../components/bases.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TournamentsRegistrComponent } from './tournaments-registr/tournaments-registr.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChampionshipSponsorshipComponent } from './championship-sponsorship/championship-sponsorship.component';
import { RouterModule } from '@angular/router';
import { OwnerRequestComponent } from './owner-request/owner-request.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';

@NgModule({
    declarations: [
        TournamentsComponent,
        HomeComponent,
        TournamentsRegistrComponent,
        ChampionshipSponsorshipComponent,
        OwnerRequestComponent,
        MatchOverviewComponent
    ],
    imports: [
        BrowserModule,
        LandingPageRoutingModule,
        SlickCarouselModule,
        BasesModule,
        TranslateModule,
        MatButtonModule,
        MatRippleModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FontAwesomeModule,
        RouterModule,


    ],
    exports: [TournamentsComponent,
        HomeComponent]
})

export class LandingPageModule { }