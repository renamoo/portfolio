import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/**
 * For google analytics
 */
let gtag: (name: string, id: string, path: { [key: string]: unknown }) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private router: Router) { }

  ngOnInit() {
    this.setCustomCSSVariable();
    this.registerRouterEventToGA();
  }

  /**
   * For Mobile height adjustment
   */
  setCustomCSSVariable() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  registerRouterEventToGA() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (window['gtag']) {
          window['gtag']('config', 'UA-142569843-2', { 'page_path': event.urlAfterRedirects });
        }
      }
    });
  }
}
