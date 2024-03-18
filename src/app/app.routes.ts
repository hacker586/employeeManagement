import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordComponent } from './password/password.component';
import { NgModule } from '@angular/core';
import { FamilySetupComponent } from './family-setup/family-setup.component';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { NagrikHomeComponent } from './nagrik-home/nagrik-home.component';
import { NagrikComplaintComponent } from './nagrik-complaint/nagrik-complaint.component';
import { NagrikAnnouncementsComponent } from './nagrik-announcements/nagrik-announcements.component';
import { NagrikProfileViewComponent } from './nagrik-profile-view/nagrik-profile-view.component';
import { NagrikFAQComponent } from './nagrik-faq/nagrik-faq.component';

// import { Component } from '@angular/core';
export const routes: Routes = [
    {path: 'home',  component: HomeComponent},
    {path: 'login',  component: LoginComponent},
    {path: 'signUp', component:  SignUpComponent},
    {path: 'password', component: PasswordComponent},
    {path: 'profileSetup', component: ProfileSetupComponent },
    {path: 'familySetup', component: FamilySetupComponent },
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'profile',component:ProfileComponent},
    {path:'nagrikHome',component:NagrikHomeComponent},
    {path:'nagrikComplaint',component:NagrikComplaintComponent},
    {path:'nagrikComplaint/:section',component:NagrikComplaintComponent},
    {path:'nagrikAnnouncements',component:NagrikAnnouncementsComponent},
    {path:'nagrikFAQ',component:NagrikFAQComponent},
    {path:'nagrikProfileView',component:NagrikProfileViewComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
