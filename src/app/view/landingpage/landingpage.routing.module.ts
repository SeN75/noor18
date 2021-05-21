import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsRegistrComponent } from './tournaments-registr/tournaments-registr.component';
import { ChampionshipSponsorshipComponent } from './championship-sponsorship/championship-sponsorship.component';
import { OwnerRequestComponent } from './owner-request/owner-request.component';


const childern: Routes = [
    { component: TournamentsComponent, path: 'tournaments', },
    { component: TournamentsRegistrComponent, path: 'tournaments-registr', },
    { component: ChampionshipSponsorshipComponent, path: 'sponsorship', },
    { component: OwnerRequestComponent, path: 'owner-request', },
    { component: HomeComponent, path: 'home', },
]
const routes: Routes = [
    { component: LandingpageComponent, path: '', children: childern },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(routes)
    ],
})
export class LandingPageRoutingModule { }
