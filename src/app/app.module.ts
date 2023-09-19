import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@visurel/iconify-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayOnHoverDirective } from './custom-directives/display-on-hover.directive';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { DashboardSideBarComponent } from './dashboard-side-bar/dashboard-side-bar.component';
import { DealsComponent } from './deals/deals.component';
import { HeaderComponent } from './header/header.component';
import { LeadsComponent } from './leads/leads.component';
import { LoginComponent } from './login/login.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { GenericService } from './shared/generic.service';
import { StatusComponent } from './shared/status/status.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MsalModule } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { PlaceHolderDirective } from './custom-directives/place-holder.directive';
import { LeadsService } from './leads/leads.service';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { SimpleButtonComponent } from './shared/simple-button/simple-button.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsSerivce } from './contacts/contacts.service';
import { DealsService } from './deals/deals.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardSideBarComponent,
    PageHeaderComponent,
    LeadsComponent,
    DealsComponent,
    DisplayOnHoverDirective,
    CustomTableComponent,
    StatusComponent,
    HomePageComponent,
    SimpleFormComponent,
    PlaceHolderDirective,
    CustomDialogComponent,
    SimpleButtonComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: 'f361f9da-7fbc-4eee-83c1-6af13596783d',
          authority: 'https://login.microsoftonline.com/c6e03b76-280a-4d3c-a1c1-cbde099ac104',
          redirectUri: "http://localhost:4200/home-page/leads-page"
        }
      }),
      null,
      null
    ),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSelectModule,
  ],
  providers: [GenericService, LeadsService, DealsService, ContactsSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
