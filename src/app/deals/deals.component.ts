import { Component, OnInit } from '@angular/core';
import { DealsService } from './deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private dealsSerivce: DealsService) { }

  schema: any
  data: any
  reRender: boolean
  loading = false

  ngOnInit(): void {
    this.schema = this.dealsSerivce.schema
    this.data = this.dealsSerivce.data
  }

  addNewItemEvent() {
    this.dealsSerivce.addNewDeal({
      deal: "",
      stage: "",
      owner: "",
      dealValue: "",
      contacts: "",
      edit: true
    },)
  }

  newDataAdded(event) {
    this.dealsSerivce.updateItem(event?.data, event?.itemIndex)
    this.reRender = !this.reRender
  }

  dataRemovedEvent(itemIndex) {
    this.dealsSerivce.deleteItem(itemIndex)
  }

  onSearch(searchValue) {
    this.loading = true
    setTimeout(() => {
      this.data = this.dealsSerivce.dataFilter(searchValue.target.value)
      this.loading = false
    }, 3000)
  }


}
