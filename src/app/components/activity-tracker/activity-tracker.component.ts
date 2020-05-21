import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.component.html',
  styleUrls: ['./activity-tracker.component.css']
})
export class ActivityTrackerComponent implements OnInit {

  public currentDate = new Date().toLocaleString();

  constructor() { }

  ngOnInit(): void {
    setInterval(this.currentDate,1000);
  }

}
