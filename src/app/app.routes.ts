import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordComponent } from './password/password.component';
import { NgModule } from '@angular/core';
import { FamilySetupComponent } from './family-setup/family-setup.component';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component';
// import { Component } from '@angular/core';
export const routes: Routes = [
    {path: 'home',  component: HomeComponent},
    {path: 'login',  component: LoginComponent},
    {path: 'signUp', component:  SignUpComponent},
    {path: 'password', component: PasswordComponent},
    { path: 'profileSetup', component: ProfileSetupComponent },
    { path: 'familySetup', component: FamilySetupComponent },
    {path:'', redirectTo:'/home', pathMatch:'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
