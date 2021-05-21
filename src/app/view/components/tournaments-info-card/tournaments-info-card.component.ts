import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tournaments-info-card',
  templateUrl: './tournaments-info-card.component.html',
  styleUrls: ['./tournaments-info-card.component.scss']
})
export class TournamentsInfoCardComponent implements OnInit {
  @Input() tournament: any;
  constructor(public lang: LanguageService, private router: Router) { }

  ngOnInit(): void {
  }
  gotoRegistr() {
    this.router.navigateByUrl('/tournaments-registr');
  }
}
