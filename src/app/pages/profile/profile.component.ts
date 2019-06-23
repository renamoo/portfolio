import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  skills: { imgName: string, name: string, level: string }[] = [
    { imgName: 'ts', name: 'TypeScript', level: '900' },
    { imgName: 'angular', name: 'Angular', level: '970' },
    { imgName: 'html5', name: 'HTML5', level: '900' },
    { imgName: 'java', name: 'Java', level: '900' },
    { imgName: 'scss', name: 'Scss', level: '900' },
    { imgName: 'vue', name: 'Vue.js', level: '600' },
    { imgName: 'aws', name: 'aws', level: '700' }
  ];
  comment = `2018年に新卒で大企業向け業務基幹システムの設計・開発・販売を行う企業に入社。Angular + SpringBoot(Java)で製品開発をするかに思われたが、色々あって社内のAngular共通コンポーネントライブラリの立ち上げに関わることになり、配属半年後にはライブラリを丸投げされるようになる。(本人的にはハッピー)
  デモサイトを作ったり、ドキュメント自動生成させてみたり、テストを一人で書いてみたりする傍ら、時々プロダクト開発も手伝う日々を過ごす。
  可愛くて使いやすくて役に立つものが作りたいなあと思って日々生きている。`;

  constructor() { }

  ngOnInit() {
  }

}
