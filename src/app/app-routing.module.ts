import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminFaqsComponent } from './admin/admin-faqs/admin-faqs.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { ManageNgosComponent } from './admin/manage-ngos/manage-ngos.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { BaseOneComponent } from './base-one/base-one.component';
import { BaseThreeComponent } from './base-three/base-three.component';
import { BaseTwoComponent } from './base-two/base-two.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FaqsComponent } from './ngo-dashboard/faqs/faqs.component';
import { FundingNormsComponent } from './ngo-dashboard/funding-norms/funding-norms.component';
import { NgoCriteriaComponent } from './ngo-dashboard/ngo-criteria/ngo-criteria.component';
import { OrganizationsComponent } from './ngo-dashboard/organizations/organizations.component';
import { RegisterComponent } from './ngo-dashboard/register/register.component';
import { StatusComponent } from './ngo-dashboard/status/status.component';
import { NgoHomeComponent } from './ngo/ngo-home/ngo-home.component';
import { NgoLoginComponent } from './ngo/ngo-login/ngo-login.component';
import { NgoRegisterComponent } from './ngo/ngo-register/ngo-register.component';
import { NgoComponent } from './ngo/ngo.component';
import { StepAboutusComponent } from './step-dashboard/step-aboutus/step-aboutus.component';
import { StepFaqComponent } from './step-dashboard/step-faq/step-faq.component';
import { StepGuidelinesComponent } from './step-dashboard/step-guidelines/step-guidelines.component';
import { StepRegistration2Component } from './step-dashboard/step-registration2/step-registration2.component';
import { StepStatusComponent } from './step-dashboard/step-status/step-status.component';
import { StepTrainingListComponent } from './step-dashboard/step-training-list/step-training-list.component';
import { StepHomeComponent } from './step/step-home/step-home.component';
import { StepLoginComponent } from './step/step-login/step-login.component';
import { StepRegisterComponent } from './step/step-register/step-register.component';
import { StepComponent } from './step/step.component';
import { UserLoginService } from './user-login.service';

const routes: Routes = [
  { path: '', redirectTo: 'base-1', pathMatch: 'full' },
  {
    path: 'base-1',
    component: BaseOneComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MainHomeComponent },
      {
        path: 'step',
        component: StepComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: StepHomeComponent },
          { path: 'login', component: StepLoginComponent },
          { path: 'register', component: StepRegisterComponent },
        ],
      },
      {
        path: 'ngo',
        component: NgoComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: NgoHomeComponent },
          { path: 'login', component: NgoLoginComponent },
          { path: 'register', component: NgoRegisterComponent },
        ],
      },
      { path: 'admin', component: AdminLoginComponent },
    ],
  },
  {
    path: 'base-2',
    component: BaseTwoComponent,
    children: [
      { path: '', redirectTo: 'aboutus', pathMatch: 'full' },
      { path: 'aboutus', component: StepAboutusComponent },
      { path: 'guidelines', component: StepGuidelinesComponent },
      { path: 'training', component: StepTrainingListComponent },
      { path: 'registration', component: StepRegistration2Component },
      { path: 'status', component: StepStatusComponent },
      { path: 'faqs', component: StepFaqComponent },
    ],
    canActivate: [UserLoginService],
  },
  {
    path: 'base-3',
    component: BaseThreeComponent,
    children: [
      { path: '', redirectTo: 'criteria', pathMatch: 'full' },
      { path: 'criteria', component: NgoCriteriaComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'funding', component: FundingNormsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'status', component: StatusComponent },
      { path: 'faqs', component: FaqsComponent },
    ],
  },
  {
    path: 'admin-dashboard',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'manage-ngos', component: ManageNgosComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'admin-faqs', component: AdminFaqsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
