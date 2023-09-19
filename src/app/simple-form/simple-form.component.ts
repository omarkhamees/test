import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  @Input()
  btnTitle: string = ''

  @Input()
  loading: boolean

  @Output()
  addNewItemEvent = new EventEmitter<any>()

  @Output()
  onSearchEvent = new EventEmitter<Event>()

  color = 'accent'

  addNewItem() {
    this.addNewItemEvent.emit()
  }

  onSearch(e: Event) {
    this.onSearchEvent.emit(e)
  }
}
