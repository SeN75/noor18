import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-statistics',
  templateUrl: './widget-statistics.component.html',
  styleUrls: ['./widget-statistics.component.scss']
})
export class WidgetStatisticsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
