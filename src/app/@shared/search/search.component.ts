import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  @Input() placeholderText: string;

  private searchDelay;
  private delayTime = 1000;
  searchValue: string = '';

  constructor() {}

  onSearchHandler() {
    this.cancelEmit();
    this.emitIt();
  }

  emitIt() {
    this.searchDelay = setTimeout(() => {
      this.search.emit(this.searchValue);
    }, this.delayTime);
  }

  cancelEmit() {
    clearTimeout(this.searchDelay);
  }
}
