import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  isOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }

  onLinkClick(toGo: string) {
    this.router.isActive(toGo, true) ? this.onClick() : this.router.navigate([`/${toGo}`]);
  }
}
