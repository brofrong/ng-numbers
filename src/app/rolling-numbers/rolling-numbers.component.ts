import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-rolling-numbers',
  templateUrl: './rolling-numbers.component.html',
  styleUrls: ['./rolling-numbers.component.scss']
})
export class RollingNumbersComponent implements OnInit, OnChanges {
  @Input() number = 0;
  public digits: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setDigits();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setDigits();
  }

  public trackByFn(index: number) {
    return index;
  }

  private setDigits() {
    this.digits = this.getDigits(this.number);
  }

  private getDigits(number: number): number[] {
    return number.toString().split('').map((num) => +num);
  }


}
