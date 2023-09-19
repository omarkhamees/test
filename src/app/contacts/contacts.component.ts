import { Component, OnInit } from '@angular/core';
import { ContactsSerivce } from './contacts.service';
import { DealsService } from '../deals/deals.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService: ContactsSerivce, private dealsService: DealsService) { }

  data = []
  schema = []
  deals = []
  reRender: boolean

  ngOnInit(): void {
    this.deals = this.dealsService.getDeals()
    this.data = this.contactsService.data
    this.schema = this.contactsService.schema(this.deals)
  }

  addNewItemEvent() {
    this.contactsService.addNewContact({
      contact: "",
      deals: [],
      priority: "",
      phone: "",
      email: "",
      dealsValue: "",
      edit: true
    },)
  }

  dataRemovedEvent(itemIndex) {
    this.contactsService.deleteItem(itemIndex)
  }

  newDataAdded(e) {
    console.log(e?.data);
    this.contactsService.updateItem(e?.data, e?.itemIndex)
    this.reRender = !this.reRender
  }

}
