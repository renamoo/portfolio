import { Component, OnInit } from '@angular/core';

export interface WorkInfo {
  title: string;
  summary: string;
  imgName: string;
  media: string;
  techIcons: string[];
  blog?: string;
  github: string;
  when: string;
  demo: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  works: WorkInfo[] = INFO;

  constructor() { }

  ngOnInit() {
  }

}

const INFO = [
  {
    title: 'ng-simple-carousel',
    summary: 'シンプルでカスタマイズしやすいモバイル対応のAngularカルーセルコンポーネント',
    imgName: 'carousel',
    media: 'PC | Mobile',
    techIcons: ['angular'],
    github: 'https://github.com/renamoo/ng-simple-carousel',
    when: 'July. 2020',
    demo: 'https://ng-simple-carousel.netlify.app/'
  },
  {
    title: 'COMEART',
    summary: 'アーティスト支援サービスCOMEARTのポータルサイト全面リニューアルを担当しました。',
    imgName: 'comeart',
    media: 'PC | Mobile',
    techIcons: ['angular'],
    github: '',
    when: 'July. 2020',
    demo: 'comeart.co.jp'
  },
  {
    title: 'Unsubscribeしないこだれだ',
    summary: 'RxJSでUnsubscribeしないと実際どう言う問題が起こりうるのか楽しく体験できたらいいなと思って作りました',
    imgName: 'unsubscribe-ghost',
    media: 'PC Only',
    techIcons: ['angular'],
    github: 'https://github.com/renamoo/unsubscribe-ghost',
    when: 'Sep. 2019',
    demo: 'https://unsubscribe-ghost.netlify.app/'
  },
  {
    title: 'Material-UI Icon List',
    summary: 'ReactのMaterial-UIのBuilt-inアイコンの一覧が欲しかったのと、Outlinedなどの違いがわからなかったので、検索できて違いがわかりやすいアイコン一覧を作りました。一日で作り切ったのでかなりシンプル。',
    imgName: 'icon-list',
    media: 'PC Only',
    techIcons: ['react'],
    github: 'https://github.com/renamoo/Material-UI-Icon-List',
    when: 'June. 2019',
    demo: 'https://material-ui-build-in-icons.netlify.com/'
  },
  {
    title: 'Hello, Subjects',
    summary: 'RxJSの各Observableの違いをインタラクティブに確認できるデモを作成してみました。',
    imgName: 'hello-subjects',
    media: 'PC Only',
    techIcons: ['angular', 'aws'],
    blog: 'https://qiita.com/rena_m/items/520127646361c66d7d3f',
    github: 'https://github.com/renamoo/HelloSubjects',
    when: 'Dec. 2018',
    demo: 'https://master.d1t0005mradh7l.amplifyapp.com/'
  },
  {
    title: '25',
    summary: '新しい言語を学んだ時に毎回作るゲームをAngularの時も作りました。その後、勉強も兼ねてPWA化してみました。',
    imgName: '25',
    media: 'Mobile Only',
    techIcons: ['angular', 'aws'],
    github: 'https://github.com/renamoo/K-s-Game',
    when: 'Oct. 2018',
    demo: 'https://d1dqknn2dmu0fk.cloudfront.net/'
  }
];
