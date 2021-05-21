import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BasesModule } from "../components/bases.module";
import { RegistrationRoutingModule } from "../registration/registration.routing.module";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        BasesModule,
        RegistrationRoutingModule,
        TranslateModule
    ],
    exports: [LoginComponent,
        SignupComponent]
})

export class RegistrationModule { }