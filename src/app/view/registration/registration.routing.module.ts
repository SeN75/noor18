import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RegistrationComponent } from './registration.component';
import { SignupComponent } from './signup/signup.component';

const children: Routes = [
    { component: LoginComponent, path: 'login' },
    { component: SignupComponent, path: 'signup' },
    { component: RegisterComponent, path: 'register' },
];
const routes: Routes = [
    { component: RegistrationComponent, path: "registration", children: children }
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes)
    ],
})

export class RegistrationRoutingModule { }