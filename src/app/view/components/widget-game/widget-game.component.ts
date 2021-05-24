import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-game',
  templateUrl: './widget-game.component.html',
  styleUrls: ['./widget-game.component.scss']
})
export class WidgetGameComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
