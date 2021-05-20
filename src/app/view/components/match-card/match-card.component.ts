import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent implements OnInit {
  @Input() match: any;
  constructor() { }

  ngOnInit(): void {
  }

}
