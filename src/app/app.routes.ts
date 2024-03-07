import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordComponent } from './password/password.component';
// import { Component } from '@angular/core';
export const routes: Routes = [
    {path: 'home',  component: HomeComponent},
    {path: 'login',  component: LoginComponent},
    {path: 'signUp', component:  SignUpComponent},
    {path: 'password', component: PasswordComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
];
