import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {
  @Input() digit: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
