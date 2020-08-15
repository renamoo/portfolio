import { Component, OnInit } from '@angular/core';
import { CarouselController, CarouselImage } from 'ng-simple-carousel';

export interface WorkInfo {
  title: string;
  summary: string;
  imgName: string;
  media: string;
  techIcons: string[];
  when: string;
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  works: WorkInfo[] = INFO;
  images: CarouselImage[];
  controller = new CarouselController();
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    this.images = this.works.map((work, i) => {
      return {
        id: i.toString(),
        src: `assets/${work.imgName}.png`,
        alt: 'website capture',
        sources: [{
          srcset: `assets/${work.imgName}.webp`,
          type: 'image/webp'
        }]
      };
    });
  }

  onClick(diff: number) {
    this.activeIndex += diff;
    if (this.activeIndex < 0) {
      this.activeIndex = 0;
    } else if (this.activeIndex > this.works.length - 1) {
      this.activeIndex = this.works.length - 1;
    }
  }

  onImgChange(newId: string) {
    this.activeIndex = Number(newId);
  }

}

const INFO = [
  {
    title: 'ng-simple-carousel',
    summary: 'シンプルでカスタマイズしやすいモバイル対応のAngularカルーセルコンポーネント',
    imgName: 'carousel',
    media: 'PC | Mobile',
    techIcons: ['angular'],
    when: 'July. 2020',
    links: [
      {
        name: 'Repo',
        icon: 'github',
        url: 'https://github.com/renamoo/ng-simple-carousel'
      },
      {
        name: 'Demo',
        icon: 'globe',
        url: 'https://ng-simple-carousel.netlify.app/'
      },
      {
        name: 'npm',
        icon: 'npm',
        url: 'https://www.npmjs.com/package/ng-simple-carousel'
      }
    ]
  },
  {
    title: 'COMEART',
    summary: 'アーティスト支援サービスCOMEARTのポータルサイト全面リニューアルを担当しました。',
    imgName: 'comeart',
    media: 'PC | Mobile',
    techIcons: ['angular'],
    github: '',
    when: 'July. 2020',
    links: [
      {
        name: 'Website',
        icon: 'globe',
        url: 'https://comeart.co.jp'
      },
      {
        name: 'Tech Blog',
        icon: 'pen',
        url: 'https://qiita.com/rena_m/items/451715080d720deb0396'
      }
    ]
  },
  {
    title: 'Unsubscribeしないこだれだ',
    summary: 'RxJSでUnsubscribeしないと実際どう言う問題が起こりうるのか楽しく体験できたらいいなと思って作りました',
    imgName: 'unsubscribe-ghost',
    media: 'PC Only',
    techIcons: ['angular'],
    when: 'Sep. 2019',
    links: [
      {
        name: 'Repo',
        icon: 'github',
        url: 'https://github.com/renamoo/unsubscribe-ghost'
      },
      {
        name: 'Demo',
        icon: 'globe',
        url: 'https://unsubscribe-ghost.netlify.app/'
      }
    ]
  },
  {
    title: 'Material-UI Icon List',
    summary: 'ReactのMaterial-UIのBuilt-inアイコンの一覧が欲しかったのと、Outlinedなどの違いがわからなかったので、検索できて違いがわかりやすいアイコン一覧を作りました。一日で作り切ったのでかなりシンプル。',
    imgName: 'icon-list',
    media: 'PC Only',
    techIcons: ['react'],
    when: 'June. 2019',
    links: [
      {
        name: 'Repo',
        icon: 'github',
        url: 'https://github.com/renamoo/Material-UI-Icon-List'
      },
      {
        name: 'Website',
        icon: 'globe',
        url: 'https://material-ui-build-in-icons.netlify.com/'
      }
    ]
  },
  {
    title: 'Hello, Subjects',
    summary: 'RxJSの各Observableの違いをインタラクティブに確認できるデモを作成してみました。',
    imgName: 'hello-subjects',
    media: 'PC Only',
    techIcons: ['angular', 'aws'],
    when: 'Dec. 2018',
    links: [
      {
        name: 'Repo',
        icon: 'github',
        url: 'https://github.com/renamoo/HelloSubjects'
      },
      {
        name: 'Demo',
        icon: 'globe',
        url: 'https://master.d1t0005mradh7l.amplifyapp.com/'
      },
      {
        name: 'Tech Blog',
        icon: 'pen',
        url: 'https://qiita.com/rena_m/items/520127646361c66d7d3f'
      }
    ]
  },
  {
    title: '25',
    summary: '新しい言語を学んだ時に毎回作るゲームをAngularの時も作りました。その後、勉強も兼ねてPWA化してみました。',
    imgName: '25',
    media: 'Mobile Only',
    techIcons: ['angular', 'aws'],
    when: 'Oct. 2018',
    links: [
      {
        name: 'Repo',
        icon: 'github',
        url: 'https://github.com/renamoo/Material-UI-Icon-List'
      },
      {
        name: 'Demo',
        icon: 'globe',
        url: 'https://d1dqknn2dmu0fk.cloudfront.net/'
      }
    ]
  }
];
