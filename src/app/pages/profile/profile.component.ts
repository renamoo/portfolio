import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  skills: { imgName: string, name: string, level: string }[] = [
    { imgName: 'ts', name: 'TypeScript', level: '820' },
    { imgName: 'angular', name: 'Angular', level: '900' },
    { imgName: 'html5', name: 'HTML5', level: '900' },
    { imgName: 'java', name: 'Java', level: '900' },
    { imgName: 'scss', name: 'Scss', level: '900' },
    { imgName: 'vue', name: 'Vue.js', level: '600' },
    { imgName: 'aws', name: 'aws', level: '600' }
  ];
  comment = `大学時代は通訳・翻訳の勉強をしていました。
  2018年に新卒で大企業向け業務基幹システムの設計・開発・販売を行う企業に入社し、
  フロントはAngular、サーバーサイドはJava(Spring Boot)、その他DynamoDBなどAWSのサービスも使いながら開発をしています。
  「可愛くて役に立つ」を作れるエンジニアになるべく日々修行中です。`;

  constructor() { }

  ngOnInit() {
  }

}
