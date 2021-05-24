import { Component } from '@angular/core';
import { LanguageService } from './_services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noor18';
  constructor(private lang: LanguageService, private router: Router) {
  }
}
