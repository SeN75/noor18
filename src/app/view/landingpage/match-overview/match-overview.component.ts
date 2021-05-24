import { Component, OnInit } from '@angular/core';
import { matchFinished } from 'src/app/_common/globle';
import { LanguageService } from 'src/app/_services/language.service';
import { ICON } from './../../../_common/globle';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent implements OnInit {
  data = matchFinished[0];
  icon = ICON
  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
