import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = true;
  constructor() {

    setTimeout(() => this.isLoading = false, 2000)
  }

  ngOnInit(): void {
  }

}
