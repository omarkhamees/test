import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LeadsComponent } from './leads/leads.component';
import { DealsComponent } from './deals/deals.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "",
    children: [{
      path: "home-page",
      component: HomePageComponent,
      children: [
        {
          path: "leads-page",
          component: LeadsComponent
        },
        {
          path: "deals-page",
          component: DealsComponent
        },
        {
          path: "contacts-page",
          component: ContactsComponent
        }
      ]
    }]
  },
  {
    path: "login",
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
