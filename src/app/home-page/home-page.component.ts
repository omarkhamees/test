import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent {
  navWidth = 230

  scaleDownUpSideBarEvent(e) {
    this.navWidth = e
  }

  navItems = [
    {
      name: "Leads",
      icon: "leadIcon",
      path: "leads-page"
    },
    {
      name: "Deals",
      icon: "dealIcon",
      path: "deals-page"
    },
    {
      name: "Contacts",
      icon: "contactsIcon",
      path: "contacts-page"
    },
    {
      name: "Accounts",
      icon: "accountsIcon",
      path: "/lead"
    },
    {
      name: "Activities",
      icon: "activitiesIcon",
      path: "/lead"
    }
  ]
}
