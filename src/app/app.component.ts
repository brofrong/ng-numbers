import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-numbers';
  public numberControl = new FormControl(1234567890, [Validators.required]);

  public setRandomValue() {
    const length = this.numberControl.value.toString().length;
    const newValue = Math.floor(Math.random() * Math.pow(10,length));
    this.numberControl.patchValue(this.zeroPad(newValue, length));
  }

  private zeroPad =  (num: number, places: number) => String(num).padStart(places, '0');
}
