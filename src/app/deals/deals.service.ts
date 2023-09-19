import { Subject } from "rxjs"
import { StatusComponent } from "../shared/status/status.component"

export class DealsService {


    schema = [
        {
            name: "Deal",
            value: "deal",
            type: "text"
        },
        {
            name: "Stage",
            value: "stage",
            type: "select",
            dynamic: true,
            dynamicComponent: StatusComponent,
            values: [
                {
                    label: "Discovery",
                    value: "5",
                    color: "#0086c0"
                },
                {
                    label: "Proposal",
                    value: "6",
                    color: "#037f4c"
                },
                {
                    label: "Negotiation",
                    value: "7",
                    color: "#784bd1"
                },
            ]
        },
        {
            name: "Owner",
            value: "owner",
            type: "text"
        },
        {
            name: "Deal Value",
            value: "dealValue",
            type: "text"
        },
        {
            name: "Contacts",
            value: "contacts",
            type: "text"
        }
    ]

    data = [
        {
            deal: "Deal 1",
            stage: "5",
            owner: "Ali",
            dealValue: "$20,000",
            contacts: "Test",
            edit: false
        },
        {
            deal: "Deal 2",
            stage: "6",
            owner: "Ahmad",
            dealValue: "$120,000",
            contacts: "Test",
            edit: false
        },
        {
            deal: "Deal 3",
            stage: "7",
            owner: "Sara",
            dealValue: "$90,000",
            contacts: "Test",
            edit: false
        }
    ]

    getItemByIndex(idx) {
        return this.data[idx]
    }

    addNewDeal(data: any) {
        this.data.push(data)
    }

    updateItem(data, index) {
        this.data[index] = { ...data, edit: false }
    }

    deleteItem(index) {
        this.data.splice(index, 1)
    }

    dataFilter(value) {
        if (value)
            return this.data.filter((item) => item.deal === value)
        return this.data
    }

    getDeals() {
        return this.data?.map((item, idx) => { return { label: item.deal, value: idx } })
    }

}