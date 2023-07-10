import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  private date = new Date();
  private daysInMonth = daysInMonth(this.date);
  month = this.date.toLocaleString('default', { month: 'long' });
  arrayOfDays = Array(this.daysInMonth).fill(0).map((_, i) =>  i + 1);
  fillerDays = Array(getStartingWeekday(this.date.getMonth(), this.date.getFullYear()) - 1).fill(0);

  constructor() {
    console.log(this.daysInMonth)
  }

}

function daysInMonth(date: Date): number {
  console.log(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate());
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getStartingWeekday(month: number, year: number): number {
  console.log(month, year, new Date(year, month, 1).getDay());
  return new Date(year, month, 1).getDay();
}