import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'tournaments-info-card',
  templateUrl: './tournaments-info-card.component.html',
  styleUrls: ['./tournaments-info-card.component.scss']
})
export class TournamentsInfoCardComponent implements OnInit {
  @Input() tournament: any;
  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
