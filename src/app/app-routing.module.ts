import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './view/components/base/base.component';
import { LandingpageComponent } from './view/landingpage/landingpage.component';
import { RegistrationComponent } from './view/registration/registration.component';

const routes: Routes = [
  { component: LandingpageComponent, path: '' },
  { component: BaseComponent, path: 'base' },
  { component: RegistrationComponent, path: 'registration' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
