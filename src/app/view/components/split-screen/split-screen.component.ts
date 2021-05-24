import { Component, OnInit } from '@angular/core';
import { matchFinished } from 'src/app/_common/globle';
// import { heroSlideConfig } from './../../../_common/slideCofig';

@Component({
  selector: 'split-screen',
  templateUrl: './split-screen.component.html',
  styleUrls: ['./split-screen.component.scss']
})
export class SplitScreenComponent implements OnInit {
  data = matchFinished[0];
  constructor() {
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
