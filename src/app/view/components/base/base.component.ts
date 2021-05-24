import { Component, OnInit } from '@angular/core';
import { matchFinished, matchs, posts } from 'src/app/_common/globle';
import { LanguageService } from 'src/app/_services/language.service';
import { tournaments } from './../../../_common/globle';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  matches = matchs;
  posts = posts;
  tournaments = tournaments;
  matchFinished = matchFinished;
  isLoading = true;
  constructor(public lang: LanguageService) {

    setTimeout(() => { this.isLoading = false }, 3000)
  }

  ngOnInit(): void {
  }

}
