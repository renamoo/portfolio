import { Component, Input, OnInit } from '@angular/core';
import { WorkInfo } from './../../pages/works/works.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input() info: WorkInfo;
  constructor() { }

  ngOnInit() {
  }

  onClick(toGo: string) {
    let url;
    switch (toGo) {
      case 'blog': url = this.info.blog; break;
      case 'github': url = this.info.github; break;
      case 'demo': url = this.info.demo; break;
    }
    window.open(url, '_blank');
  }
}
