import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlaceHolderDirective } from '../custom-directives/place-holder.directive';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
})
export class CustomTableComponent implements OnChanges {

  @Input()
  schema: any;

  @Input()
  reRender: boolean;

  @Input()
  data: any;

  @Output()
  newDataAdded = new EventEmitter<any>();

  @Output()
  dataRemovedEvent = new EventEmitter<any>();

  @ViewChild('tableCellFormRef')
  formRef: NgForm;

  @ViewChildren(PlaceHolderDirective)
  placeHolders: PlaceHolderDirective[];

  showList: boolean = false

  editMode: boolean = false;

  itemToEditIndex: any;

  hover: boolean = false

  hoveredMenuItemIndex = null

  listValues = []

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadDynamicComponent();
    });
    this.data.map((item) => {
      this.schema.map((schemaItem) => {
        if (schemaItem?.type === 'select' && schemaItem?.dynamicComponent)
          this.listValues.push({ propName: schemaItem.value, value: item[schemaItem.value] })
      })
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.loadDynamicComponent();
    });
  }

  valueChoosed(propName, optionValue, itemIndex) {
    this.listValues[itemIndex] = { propName, value: optionValue }
  }

  getOptionValueLabel(options, itemIndex) {
    return options.filter((option) => option.value === this.listValues[itemIndex]?.value)[0]?.label
  }

  getOptionValueColor(options, itemIndex) {
    return options.filter((option) => option.value === this.listValues[itemIndex]?.value)[0]?.color
  }

  dataRemoved(itemIndex: any) {
    this.dataRemovedEvent.emit(itemIndex);
    this.editMode = false;
    this.itemToEditIndex = null;
    this.listValues.splice(itemIndex, 1)
  }

  onSubmit(tableCellFormRef, itemIndex, event) {
    event.stopPropagation();
    this.newDataAdded.emit({ data: { ...tableCellFormRef.form.value, [`${this.listValues?.[itemIndex]?.propName}`]: this.listValues?.[itemIndex]?.value }, itemIndex });
    this.editMode = false;
    this.itemToEditIndex = null;
  }

  loadDynamicComponent() {
    this.placeHolders['_results'].map((placeHolder) => {
      placeHolder.viewContainerRef.clear();
      const componentRef = placeHolder.viewContainerRef.createComponent(placeHolder?.dynamicComponent);
      componentRef.instance.statusValue = placeHolder.status;
      componentRef.instance.label = placeHolder.label;
      componentRef.instance.routerTo = placeHolder.routerTo;
    });
  }

  rowClicked(itemIndex: any) {
    if (this.editMode && itemIndex == this.itemToEditIndex) {
      this.editMode = false;
      this.itemToEditIndex = null;
    }
    else {
      this.editMode = true;
      this.itemToEditIndex = itemIndex;
    }
    setTimeout(() => {
      this.loadDynamicComponent();
    });
  }

  stopPropagationFunc(event) {
    event.stopPropagation();
  }
};

