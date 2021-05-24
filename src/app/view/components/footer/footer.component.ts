import { Component, OnInit } from '@angular/core';
import { ICON } from './../../../_common/globle';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icon = ICON;
  constructor() { }

  ngOnInit(): void {
  }

}
