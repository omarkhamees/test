import { Directive, Input, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[appPlaceHolder]"
})
export class PlaceHolderDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

    @Input()
    status: number
    @Input()
    dynamicComponent: any
    @Input()
    label: string
    @Input()
    routerTo: string
}