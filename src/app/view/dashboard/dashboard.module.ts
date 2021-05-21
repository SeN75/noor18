import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BasesModule } from "../components/bases.module";
import { DashboardRoutingModule } from "./dashboard.routing.module";


@NgModule({
    imports: [
        BrowserModule,
        BasesModule,
        DashboardRoutingModule
    ],
    exports: []
})

export class DashboardModule { }