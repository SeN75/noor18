import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './view/components/base/base.component';
import { LandingpageComponent } from './view/landingpage/landingpage.component';
import { RegistrationComponent } from './view/registration/registration.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { component: LandingpageComponent, path: '' },
  { component: BaseComponent, path: 'base' },
  { component: RegistrationComponent, path: 'registration' },
  { component: DashboardComponent, path: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
