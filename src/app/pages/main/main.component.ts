import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  menus = [
    {
      id: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/Rena_moo'
    },
    {
      id: 'github',
      icon: 'github',
      link: 'https://github.com/renamoo'
    },
    {
      id: 'blog-tech',
      icon: 'pencil',
      link: 'https://qiita.com/rena_m'
    },
    {
      id: 'blog-misc',
      icon: 'pencil',
      link: 'https://renamoo.hatenablog.com/'
    },
    {
      id: 'profile',
      icon: 'notification',
      routerLink: 'profile'
    },
    {
      id: 'works',
      icon: 'briefcase',
      routerLink: 'works'
    }
  ];

  constructor(private router: Router) { }

  onClick(id: string) {
    const menu = this.menus.find(m => m.id === id);
    if (menu.link) {
      window.open(menu.link, '_blank');
    } else if (menu.routerLink) {
      this.router.navigate([`/${menu.routerLink}`]);
    }
  }

}
