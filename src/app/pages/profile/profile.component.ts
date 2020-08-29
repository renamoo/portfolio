import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocaleService } from './../../services/locale.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile = PROFILE;
  comments = COMMENTS;
  locale: 'en' | 'ja';
  subscription: Subscription;

  constructor(private service: LocaleService) { }

  ngOnInit() {
    this.subscription = this.service.localeObs.subscribe(locale => this.locale = locale);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

const PROFILE = {
  comment: {
    ja: `大学では通訳を学んでいたのに新卒入社後に初めてきちんとプログラミングに触れ、
みるみるうちにその楽しさに目覚めた結果気がついたらエンジニアになっていた。
可愛くて使いやすくて役に立つものが作りたいなあと思って日々生きている。
(可愛いは必ずしも可愛いではなく楽しいやかっこいいでもよく、
使いやすさ＋機能性に＋αしたものを作りたいと言う意)`,
    en: `After graduating university, started learning programming in the first company.
Quickly fascinated by front-end world as soon as I started playing with Angular.
Living life thiking to create somthing not only useful, easy to use but also 'Kawaii'.
(Kawaii is not neccesarily be it. It could be cool, fun or stylish.)
`},
  skills: `🌟 I love works involving...
- code writing to make something better or bring someone joy
- building designs and UI/UX
- improving developer experiences (writing doc, CI/CD setup etc...)
- complex issue solving / multi-tasking
- supporting and assisting people

💬 I'm looking for projects / jobs I can work on afterwork and weekends. If you have some ideas, please let me know!

`
};

const COMMENTS = [
  {
    id: 'comment_2020',
    duration: '2020-',
    comment: {
      ja: `もう少し難しい仕事がしたくなってきた頃合いで
タイミングよく声をかけていただいたこともあり、クラウド関連の仕事に転職。
ソフトスキルと技術スキル両方を必要とするロールに就いている。
週末や終業後は社内副業やOSS、または個人で開発に勤しむ(面白そうなプロジェクト探してます)。
    `,
      en: `Started to feel like working on more challenging job.
Then luckily I got an opportunity to work at Cloud industry.
Currently working in a role requires both soft skills and technical skills.
In free time, working on development in personal projects or OSS.
`}
  },
  {
    id: 'comment_2018',
    duration: '2018, 2019',
    comment: {
      ja: `新卒で大企業向け業務基幹システムの設計/開発/販売を行う企業に入社。
Angular + SpringBootで製品開発をするかに思われたが、色々あって社内のAngularコンポーネントライブラリの立ち上げに関わり、
配属半年後にはライブラリを丸投げしてもらうように。(本人的にはハッピー)
デモの開発、ドキュメントの自動生成、CI/CDやUIテストの導入を進める傍ら、
プロダクトのパフォーマンス改善等も行っていた。
    `,
      en: `Started to work at a company develops ERP systems for large enterprises.
Supposed to develop products with Angular + SpringBoot, but somehow involved in lanuch of internal Angular library.
After six months, managed libraries mostly alone. (I was happy about it)
Developed components and demos, introduceed CI/CD, Unit tests, auto-doc generation.
Also worked on a performance tuning for products.
`}
  }
];
