import { Component } from '@angular/core';

@Component({
  selector: 'app-lemon',
  templateUrl: './lemon.component.html',
  styleUrls: ['./lemon.component.scss']
})
export class LemonComponent {

  constructor() { }

  onMenuClick(menu: string) {
    switch (menu) {
      case 'project': window.open('https://github.com/renamoo', '_blank'); break;
      case 'twitter': window.open('https://twitter.com/rena_moo', '_blank'); break;
      case 'blog': window.open('https://qiita.com/rena_m', '_blank'); break;
    }
  }
}
