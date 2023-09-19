import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { StatusComponent } from '../shared/status/status.component';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
})
export class LeadsComponent implements OnInit {
  constructor(private leadsService: LeadsService) { }

  schema: any
  data: any
  reRender: boolean
  loading: boolean = false

  ngOnInit(): void {
    this.schema = this.leadsService.schema
    this.data = this.leadsService.data
  }

  newDataAdded(event) {
    this.leadsService.updateItem(event?.data, event?.itemIndex)
    this.reRender = !this.reRender
  }

  dataRemoved(itemIndex) {
    this.leadsService.deleteItem(itemIndex)
  }

  addNewLead() {
    this.leadsService.addNewLead({
      lead: "",
      status: "",
      contact: "",
      company: "",
      title: "",
      email: "",
      phone: "",
      edit: true
    })
    this.reRender = !this.reRender
  }

  onSearch(e) {
    this.loading = true
    setTimeout(() => {
      this.data = this.leadsService.dataFilter(e?.target?.value)
      this.loading = false
    }, 3000)
  }

}
