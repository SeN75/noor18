import { Component, OnInit, Input } from '@angular/core';
import { ICON } from 'src/app/_common/globle';

@Component({
  selector: 'latest-matches-status',
  templateUrl: './latest-matches-status.component.html',
  styleUrls: ['./latest-matches-status.component.scss']
})
export class LatestMatchesStatusComponent implements OnInit {
  @Input() matches: any;
  icon = ICON;
  constructor() { }

  ngOnInit(): void {
  }

}
