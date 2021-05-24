import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-championship-sponsorship',
  templateUrl: './championship-sponsorship.component.html',
  styleUrls: ['./championship-sponsorship.component.scss']
})
export class ChampionshipSponsorshipComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
