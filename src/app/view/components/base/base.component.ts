import { Component, OnInit } from '@angular/core';
import { matchs, posts } from 'src/app/_common/globle';
import { tournaments } from './../../../_common/globle';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  matches = matchs;
  posts = posts;
  tournaments = tournaments;
  constructor() { }

  ngOnInit(): void {
  }

}
