import { SimpleButtonComponent } from "../shared/simple-button/simple-button.component"
import { StatusComponent } from "../shared/status/status.component"

export class LeadsService {

    schema = [
        {
            name: "Lead",
            value: "lead",
            type: "text"
        },
        {
            name: "Status",
            value: "status",
            dynamicComponent: StatusComponent,
            type: "select",
            values: [
                {
                    label: "Contacted",
                    value: "1",
                    color: "#ff642e"
                },
                {
                    label: "New Lead",
                    value: "2",
                    color: "#ff158a"
                },
                {
                    label: "Qualified",
                    value: "3",
                    color: "#9cd326"
                },
                {
                    label: "UnQualified",
                    value: "4",
                    color: "#bb3354"
                }
            ]
        },
        {
            name: "Create a contact",
            value: "contact",
            dynamicComponent: SimpleButtonComponent,
            fixedValue: "Move To Contacts",
            routerTo:"contacts-page",
            type:"dynamic"
        },
        {
            name: "Company",
            value: "company",
            type: "text"
        },
        {
            name: "Title",
            value: "title",
            type: "text"
        },
        {
            name: "Email",
            value: "email",
            type: "text",
            extraValidations: ["email"]
        },
        {
            name: "Phone",
            value: "phone",
            type: "text"
        },
    ]

    data = [
        {
            lead: "Saim",
            status: "1",
            company: "Inspire",
            title: "Test",
            email: "test@inspirejo.com",
            phone: "0799896663",
        },
        {
            lead: "Elian Warren",
            status: "2",
            company: "Agently Inc",
            title: "COO",
            email: "test2@inspirejo.com",
            phone: "0778458585",
        },
        {
            lead: "Ali",
            status: "3",
            company: "Agently Inc",
            title: "COO",
            email: "test2@inspirejo.com",
            phone: "0778458585",
        },
        {
            lead: "Ahmad",
            status: "4",
            company: "Agently Inc",
            title: "COO",
            email: "test2@inspirejo.com",
            phone: "0778458585",
        },
    ]

    addNewLead(data) {
        this.data.push(data)
    }

    updateItem(data: any, idx) {
        this.data[idx] = { ...data, edit: false }
    }

    deleteItem(idx: any) {
        this?.data?.splice(idx, 1)
    }

    dataFilter(leadValue) {
        if (leadValue)
            return this.data.filter((item) => item?.lead === leadValue)
        return this.data
    }

}