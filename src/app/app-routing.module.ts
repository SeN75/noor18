import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './view/components/base/base.component';
import { LandingpageComponent } from './view/landingpage/landingpage.component';

const routes: Routes = [
  { component: LandingpageComponent, path: '' },
  { component: BaseComponent, path: 'base' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
