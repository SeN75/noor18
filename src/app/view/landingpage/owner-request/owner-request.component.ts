import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-owner-request',
  templateUrl: './owner-request.component.html',
  styleUrls: ['./owner-request.component.scss']
})
export class OwnerRequestComponent implements OnInit {

  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
