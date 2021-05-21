import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-tournaments-registr',
  templateUrl: './tournaments-registr.component.html',
  styleUrls: ['./tournaments-registr.component.scss']
})
export class TournamentsRegistrComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
