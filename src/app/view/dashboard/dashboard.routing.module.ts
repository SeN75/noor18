import { NgModule } from "@angular/core";
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserDashboradComponent } from "./user-dashborad/user-dashborad.component";

const children: Routes = [{
    component: UserDashboradComponent, path: "user-dashboard"
}];
const routes: Routes = [
    { component: DashboardComponent, path: "", children: children },
    { component: DashboardComponent, path: "dashboard", children: children },
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    declarations: []
})

export class DashboardRoutingModule { }