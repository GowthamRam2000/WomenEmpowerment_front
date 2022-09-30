import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { StepComponent } from './step/step.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { StepSideBarComponent } from './step/step-side-bar/step-side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepLoginComponent } from './step/step-login/step-login.component';
import { StepHomeComponent } from './step/step-home/step-home.component';
import { StepRegisterComponent } from './step/step-register/step-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BaseOneComponent } from './base-one/base-one.component';
import { BaseTwoComponent } from './base-two/base-two.component';
import { StepDashboardComponent } from './step-dashboard/step-dashboard.component';
import { StepAboutusComponent } from './step-dashboard/step-aboutus/step-aboutus.component';
import { StepFaqComponent } from './step-dashboard/step-faq/step-faq.component';
import { StepGuidelinesComponent } from './step-dashboard/step-guidelines/step-guidelines.component';
import { StepHeaderComponent } from './step-dashboard/step-header/step-header.component';
import { StepStatusComponent } from './step-dashboard/step-status/step-status.component';
import { StepTrainingListComponent } from './step-dashboard/step-training-list/step-training-list.component';
import { TrainingItemComponent } from './step-dashboard/step-training-list/training-item/training-item.component';
import { StepRegistration2Component } from './step-dashboard/step-registration2/step-registration2.component';
import { NgoComponent } from './ngo/ngo.component';
import { NgoHomeComponent } from './ngo/ngo-home/ngo-home.component';
import { NgoLoginComponent } from './ngo/ngo-login/ngo-login.component';
import { NgoRegisterComponent } from './ngo/ngo-register/ngo-register.component';

import { NgoDashboardComponent } from './ngo-dashboard/ngo-dashboard.component';
import { NgoCriteriaComponent } from './ngo-dashboard/ngo-criteria/ngo-criteria.component';
import { OrganizationsComponent } from './ngo-dashboard/organizations/organizations.component';
import { FundingNormsComponent } from './ngo-dashboard/funding-norms/funding-norms.component';
import { RegisterComponent } from './ngo-dashboard/register/register.component';
import { StatusComponent } from './ngo-dashboard/status/status.component';
import { FaqsComponent } from './ngo-dashboard/faqs/faqs.component';
import { NgoHeaderComponent } from './ngo-dashboard/ngo-header/ngo-header.component';
import { BaseThreeComponent } from './base-three/base-three.component';
import { NgoSideBarComponent } from './ngo/ngo-side-bar/ngo-side-bar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { BaseFourComponent } from './base-four/base-four.component';
import { ManageNgosComponent } from './admin/manage-ngos/manage-ngos.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { FaqComponent } from './ngo-dashboard/faqs/faq/faq.component';
import { AdminFaqsComponent } from './admin/admin-faqs/admin-faqs.component';
import { FaqItemComponent } from './step-dashboard/step-faq/faq-item/faq-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    StepComponent,
    MainHomeComponent,
    StepSideBarComponent,
    StepLoginComponent,
    StepHomeComponent,
    StepRegisterComponent,
    BaseOneComponent,
    BaseTwoComponent,
    StepDashboardComponent,
    StepAboutusComponent,
    StepFaqComponent,
    StepGuidelinesComponent,
    StepHeaderComponent,
    StepStatusComponent,
    StepTrainingListComponent,
    TrainingItemComponent,
    StepRegistration2Component,
    NgoComponent,
    NgoHomeComponent,
    NgoLoginComponent,
    NgoRegisterComponent,
    NgoDashboardComponent,
    NgoCriteriaComponent,
    OrganizationsComponent,
    FundingNormsComponent,
    RegisterComponent,
    StatusComponent,
    FaqsComponent,
    NgoHeaderComponent,
    BaseThreeComponent,
    NgoSideBarComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminHeaderComponent,
    BaseFourComponent,
    ManageNgosComponent,
    ManageUsersComponent,
    AdminHomeComponent,
    FaqComponent,
    AdminFaqsComponent,
    FaqItemComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
