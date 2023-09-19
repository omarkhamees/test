import { Directive, HostListener } from "@angular/core";
import { GenericService } from "../shared/generic.service";

@Directive({
    selector: "[displayOnHover]"
})
export class DisplayOnHoverDirective {
    constructor(private genericService: GenericService) { }

    @HostListener("mouseover") onHover() {
        this.genericService.itemHover.next(true)
    }

    @HostListener("mouseleave") onLeave() {
        this.genericService.itemHover.next(false)
    }

}