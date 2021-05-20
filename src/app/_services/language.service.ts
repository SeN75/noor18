import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type direction = 'rtl' | 'ltr';
type language = 'ar' | 'en';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public selected: language = 'ar';
  public dir: direction = 'rtl';

  constructor(private translate: TranslateService) {
    this.ar();

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
  }
  en() {
    this.setLanguage('en')
    this.setDirection('ltr');
  }
}
