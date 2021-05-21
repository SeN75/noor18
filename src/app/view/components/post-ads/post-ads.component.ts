import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.scss']
})
export class PostAdsComponent implements OnInit {

  @Input() post: any
  constructor(public lang: LanguageService) { }

  ngOnInit(): void {
  }

}
