import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = PROFILE;
  comments = COMMENTS;

  constructor() { }

  ngOnInit() {
  }

}

const PROFILE = {
  comment: `大学では通訳を学んでいたのに新卒入社後に初めてきちんとプログラミングに触れ、
みるみるうちにその楽しさに目覚めた結果気がついたらエンジニアになっていた。
可愛くて使いやすくて役に立つものが作りたいなあと思って日々生きている。
(可愛いは必ずしも可愛いではなく楽しいやかっこいいでもよく、
使いやすさ＋機能性に＋αしたものを作りたいと言う意)`,
  skills: `■ Can Teach to beginners
    Angular, CSS, HTML, TS, JS,
    GCP(Serverless, Storage), CI/CD tools

  ■ Comfortable to work with
    React, scss, Jest,
    AWS(Lambda, S3, API Gateway)

  ■ Have used it
    Java, Python3, Vue
`
};

const COMMENTS = [
  {
    id: 'comment_2020',
    duration: '2020-',
    comment: `もう少し難しい仕事がしたくなってきた頃合いで
タイミングよく声をかけていただいたこともあり、クラウド関連の仕事に転職。
モニタリングやメトリクスを読みつつ情報を収集・分析し、優先度を鑑みて柔軟にマルチタスクしながらCustomer Communicationもする仕事をしている。
一方変わらず開発(特にチームでの開発)も大好きなのでプライベートで副業やOSSに勤しむ(随時募集中)。
    `
  },
  {
    id: 'comment_2018',
    duration: '2018, 2019',
    comment: `新卒で大企業向け業務基幹システムの設計/開発/販売を行う企業に入社。
Angular + SpringBootで製品開発をするかに思われたが、色々あって社内のAngularコンポーネントライブラリの立ち上げに関わり、
配属半年後にはライブラリを丸投げしてもらうように。(本人的にはハッピー)
デモの開発、ドキュメントの自動生成、CI/CDやUIテストの導入を進める傍ら、
プロダクトのパフォーマンス改善等も行っていた。
    `
  }
];
