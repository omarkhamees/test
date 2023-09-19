import { Injectable } from "@angular/core"
import { StatusComponent } from "../shared/status/status.component"
import { DealsService } from "../deals/deals.service"

@Injectable()
export class ContactsSerivce {

    constructor(private dealsService: DealsService) {
    }

    data = [
        {
            contact: "Phoenix Levy",
            deals: [0],
            priority: "7",
            phone: "079897899",
            email: "test@gmail.com",
            dealsValue: "98,000"
        },
        {
            contact: "Madison",
            deals: [0, 1],
            priority: "8",
            phone: "079897899",
            email: "test@gmail.com",
            dealsValue: "128,000"
        },
        {
            contact: "Leilena",
            deals: [0, 1, 2],
            priority: "9",
            phone: "079897899",
            email: "test@gmail.com",
            dealsValue: "78,000"
        },
    ]

    schema(data) {
        return [
            {
                name: "Contact",
                value: "contact",
                type: "text",
            },
            {
                name: "Deals",
                value: "deals",
                type: "select",
                values: data,
                getValue: (idx: number) => {
                    return this.dealsService.getItemByIndex(idx)?.deal
                }
            },
            {
                name: "Priority",
                value: "priority",
                dynamicComponent: StatusComponent,
                type: "select",
                values: [
                    {
                        label: "High",
                        value: "7",
                        color: "#fc5858"
                    },
                    {
                        label: "Medium",
                        value: "8",
                        color: "#fc8c65"
                    },
                    {
                        label: "Low",
                        value: "9",
                        color: "#75aeff"
                    },
                ]
            },
            {
                name: "Phone",
                value: "phone",
                type: "text"
            },
            {
                name: "Email",
                value: "email",
                type: "text",
                extraValidations: ["email"]
            },
            {
                name: "Deals Value",
                value: "dealsValue",
                type: "text"
            },
        ]
    }

    addNewContact(data) {
        this.data.push(data)
    }

    updateItem(data: any, idx) {
        this.data[idx] = { ...data, edit: false }
    }

    deleteItem(idx: any) {
        this?.data?.splice(idx, 1)
    }

    dataFilter(leadValue) {

    }
}