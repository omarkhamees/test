import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { GenericService } from '../shared/generic.service';

@Component({
  selector: 'app-dashboard-side-bar',
  templateUrl: './dashboard-side-bar.component.html',
  styleUrls: ['./dashboard-side-bar.component.css']
})
export class DashboardSideBarComponent implements OnInit {
  @Input()
  navItems: any

  scaleDownSideBarMode = false

  @Input()
  sideBarWidth: any

  @Output()
  scaleDownUpSideBarEvent = new EventEmitter<any>()

  showBackIcon: boolean = false

  constructor(private genericService: GenericService) { }

  ngOnInit(): void {
    this.genericService.itemHover.subscribe((flag) => {
      this.showBackIcon = flag
    })
  }

  scaleUpSideBar() {
    this.scaleDownSideBarMode = false
    this.showBackIcon = false
    this.scaleDownUpSideBarEvent.emit(254)
  }

  scaleDownSideBar() {
    this.scaleDownSideBarMode = true
    this.showBackIcon = false
    this.scaleDownUpSideBarEvent.emit(75)
  }

}
