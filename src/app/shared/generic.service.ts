import { Subject } from "rxjs";

export class GenericService {
    itemHover = new Subject<boolean>()
    hideSideBar = new Subject<boolean>()
}