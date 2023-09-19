import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent {
  @Input()
  label: string

  @Input()
  routerTo: string

  onClick(e) {
    e.stopPropagation()
  }
}
