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
      link: 'https://twitter.com/Rena_moo',
      text: 'murmur',
      rotate: '30deg'
    },
    {
      id: 'github',
      icon: 'github',
      link: 'https://github.com/renamoo',
      text: 'codes',
      rotate: '-10deg'
    },
    {
      id: 'blog-tech',
      icon: 'quill',
      link: 'https://qiita.com/rena_m',
      text: 'tech blog',
      rotate: '-104deg'
    },
    {
      id: 'blog-misc',
      icon: 'pencil',
      link: 'https://renamoo.hatenablog.com/',
      text: 'misc blog',
      rotate: '-104deg'
    },
    {
      id: 'profile',
      icon: 'notification',
      routerLink: 'profile',
      text: 'profile',
      rotate: '-115deg'
    },
    {
      id: 'works',
      icon: 'briefcase',
      routerLink: 'works',
      text: 'works',
      rotate: '-100deg'
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
