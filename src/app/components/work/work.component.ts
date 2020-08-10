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

  onClick(url: string) {
    window.open(url, '_blank');
  }
}
