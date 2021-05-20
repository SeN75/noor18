import { Component, OnInit } from '@angular/core';
import { ICON, user } from 'src/app/_common/globle';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  icons = ICON;
  user = user;
  center = true;
  color = '';
  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
