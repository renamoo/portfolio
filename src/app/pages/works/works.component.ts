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
