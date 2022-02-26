import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NewsList } from '@core/data/newsList';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {
  @Output() updateFilter = new EventEmitter<any>();
  @Output() seacrhOutput = new EventEmitter<string>();
  @Input() latestNews: NewsList;

  searchValue: string;
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  from: Date | null;
  to: Date | null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) { 
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.onChangeDate();
  }

  onChangeDate() {
    if (this.fromDate) {
      this.from = new Date(
        this.fromDate.year,
        this.fromDate.month - 1,
        this.fromDate.day
      );
    }
    if (this.toDate) {
      this.to = new Date(
        this.toDate.year,
        this.toDate.month - 1,
        this.toDate.day
      );
    }
    this.updateFilter.emit({ from: this.from, to: this.to });
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  searchChanged(event) {
    this.seacrhOutput.emit(event);
  }

  ngOnInit(): void {}

}
