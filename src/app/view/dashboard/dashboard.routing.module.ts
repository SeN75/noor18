import { NgModule } from "@angular/core";
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

const chlidern: Routes = [];
const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    declarations: []
})

export class DashboardRoutingModule { }