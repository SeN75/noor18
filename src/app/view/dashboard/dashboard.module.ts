import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BasesModule } from "../components/bases.module";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { UserDashboradComponent } from './user-dashborad/user-dashborad.component';
import { DefultPageComponent } from './user-dashborad/defult-page/defult-page.component';
import { UserProfileComponent } from './user-dashborad/user-profile/user-profile.component';
import { LinkingPlatformsComponent } from './user-dashborad/linking-platforms/linking-platforms.component';
import { TeamsComponent } from './user-dashborad/teams/teams.component';
import { PersonalInfoComponent } from './user-dashborad/user-profile/personal-info/personal-info.component';
import { PlayerInfoComponent } from './user-dashborad/user-profile/player-info/player-info.component';
import { OrganizerInfoComponent } from './user-dashborad/user-profile/organizer-info/organizer-info.component';
import { CreateNewTeamComponent } from './user-dashborad/teams/create-new-team/create-new-team.component';
import { JoingToTeamComponent } from './user-dashborad/teams/joing-to-team/joing-to-team.component';
import { CurrentTeamComponent } from './user-dashborad/teams/current-team/current-team.component';


@NgModule({
    imports: [
        BrowserModule,
        BasesModule,
        DashboardRoutingModule
    ],
    exports: [],
    declarations: [
      UserDashboradComponent,
      DefultPageComponent,
      UserProfileComponent,
      LinkingPlatformsComponent,
      TeamsComponent,
      PersonalInfoComponent,
      PlayerInfoComponent,
      OrganizerInfoComponent,
      CreateNewTeamComponent,
      JoingToTeamComponent,
      CurrentTeamComponent
    ]
})

export class DashboardModule { }