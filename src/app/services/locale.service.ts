import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private locale$: BehaviorSubject<'en' | 'ja'>;
  localeObs: Observable<'en' | 'ja'>;

  constructor() { }

  // set browser locale
  init() {
    this.locale$ = new BehaviorSubject(window.navigator.language.slice(0, 2) === 'ja' ? 'ja' : 'en');
    this.localeObs = this.locale$.asObservable();
  }

  setLocale(newLocale: 'en' | 'ja') {
    this.locale$.next(newLocale);
  }

}
