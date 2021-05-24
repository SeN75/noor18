import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { postsConfig, matchesConfig } from 'src/app/_common/slideCofig';

type direction = 'rtl' | 'ltr';
type language = 'ar' | 'en';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public selected: language = 'ar';
  public dir: direction = 'rtl';
  public postsConfig = postsConfig;
  public matchesConfig = matchesConfig;
  constructor(private translate: TranslateService) {
    this.en();

  }

  setLanguage(lang: language) {
    this.translate.use(lang);
    this.selected = lang;
    localStorage.setItem('lang', lang);
  }
  setDirection(dir: direction) {
    this.dir = dir;
  }
  ar() {
    this.setLanguage('ar');
    this.setDirection('rtl');
    this.postsConfig.rtl = true;
    this.matchesConfig.rtl = true;
  }
  en() {
    this.setLanguage('en')
    this.setDirection('ltr');
    this.postsConfig.rtl = false;
    this.matchesConfig.rtl = false;

  }
}
