import { Component, OnInit } from '@angular/core';
import { matchFinished, matchs, posts } from 'src/app/_common/globle';
import { matchesConfig, postsConfig, adsConifg } from 'src/app/_common/slideCofig';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  matchs = matchs;
  matches = matchFinished;
  posts = posts;
  matchesConfig = matchesConfig;
  postsConfig = postsConfig;

  adsConifg = adsConifg;
  constructor(public lang: LanguageService) { }
  ngOnInit(): void {

  }
  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}