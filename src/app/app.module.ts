import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { AddOpportunityComponent } from './opportunity/add-opportunity/add-opportunity.component';
import { appRoutes } from './router-config';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ShowProfileComponent } from './profile/show-profile/show-profile.component';
import { ConfirmDeleteComponent } from './profile/confirm-delete/confirm-delete.component';
import { SelectProfileComponent } from './profile/select-profile/select-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { SelectOneProfileComponent } from './profile/select-one-profile/select-one-profile.component';
import { ConfirmDeleteOpportunityComponent } from './opportunity/confirm-delete-opportunity/confirm-delete-opportunity.component';
import { EditOpportunityComponent } from './opportunity/edit-opportunity/edit-opportunity.component';
import { SelectOpportunityComponent } from './opportunity/select-opportunity/select-opportunity.component';
import { SelectOneOpportunityComponent } from './opportunity/select-one-opportunity/select-one-opportunity.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    OpportunityComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AddProfileComponent,
    AddOpportunityComponent,
    ShowProfileComponent,
    ConfirmDeleteComponent,
    SelectProfileComponent,
    EditProfileComponent,
    SelectOneProfileComponent,
    ConfirmDeleteOpportunityComponent,
    EditOpportunityComponent,
    SelectOpportunityComponent,
    SelectOneOpportunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
