import { Component, OnInit } from '@angular/core';
import { matchesConfig, postsConfig } from 'src/app/_common/slideCofig';
import { matchs, posts } from './../../_common/globle';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  matchs = matchs;
  posts = posts;
  matchesConfig = matchesConfig;
  postsConfig = postsConfig;

  constructor(public lang: LanguageService) { }
  ngOnInit(): void {
    if (this.lang.dir == 'rtl') {
      postsConfig.rtl = true;
      matchesConfig.rtl = true;
    }
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
