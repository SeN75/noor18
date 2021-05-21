import { Component, OnInit } from '@angular/core';
import { tournaments } from 'src/app/_common/globle';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {
  tournaments = tournaments;
  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
