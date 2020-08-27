import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocaleService } from './../../services/locale.service';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss']
})
export class LocaleComponent implements OnInit, OnDestroy {
  locale: 'en' | 'ja';
  subscription: Subscription;

  constructor(private service: LocaleService) { }

  ngOnInit(): void {
    this.subscription = this.service.localeObs.subscribe(locale => this.locale = locale);
  }

  onClick(newLocale: 'en' | 'ja') {
    this.service.setLocale(newLocale);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
