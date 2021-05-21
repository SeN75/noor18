import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
