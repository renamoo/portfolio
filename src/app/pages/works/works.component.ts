import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselController, CarouselImage } from 'ng-simple-carousel';
import { Subscription } from 'rxjs';
import { LocaleService } from './../../services/locale.service';

export interface WorkInfo {
  title: string;
  summary: { en: string, ja: string }
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
export class WorksComponent implements OnInit, OnDestroy {
  works: WorkInfo[] = INFO;
  images: CarouselImage[];
  controller = new CarouselController();
  activeIndex = 0;
  locale: 'en' | 'ja';
  subscription: Subscription;

  constructor(private service: LocaleService) { }

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
    this.subscription = this.service.localeObs.subscribe(locale => this.locale = locale);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}

const INFO = [
  {
    title: 'ng-simple-carousel',
    summary: {
      ja: 'シンプルさ、カスタマイズのしやすさを重視した軽量かつレスポンシブなAngularカルーセルを作りました。',
      en: 'Lightweight Angular responsive carousel focusing on the simplicity and easy-customize'
    },
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
    summary: {
      ja: 'アーティスト支援サービスCOMEARTのポータルサイト全面リニューアルを担当しました。',
      en: 'Fully renovated COMEART, a website to encourage artists '
    },
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
        name: 'Blog',
        icon: 'pen',
        url: 'https://qiita.com/rena_m/items/451715080d720deb0396'
      }
    ]
  },
  {
    title: 'Unsubscribeしないこだれだ',
    summary: {
      ja: 'RxJSでUnsubscribeしないと実際どう言う問題が起こりうるのか、楽しく体験できたらいいなと思って作りました',
      en: 'Created for RxJS learners to learn with fun what would happen when we forget unsubscribe'
    },
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
      },
      {
        name: 'Blog',
        icon: 'pen',
        url: 'https://qiita.com/rena_m/items/55103ea423c78a5776c6'
      }
    ]
  },
  {
    title: 'Material-UI Icon List',
    summary: {
      ja: 'ReactのMaterial-UIのBuilt-inアイコンの一覧が欲しかったのと、Outlinedなどの違いがわからなかったので、検索できて違いがわかりやすいアイコン一覧を作りました。一日で作り切ったのでかなりシンプルです。',
      en: 'Created searchiable icon lists b/c I wanted one which also shows the differences of each type such as Outlined. Spent only one day so it is very simple.'
    },
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
    summary: {
      ja: 'RxJSの各Observableの違いをインタラクティブに確認できるデモを作成してみました。',
      en: 'Interactive demo to see the difference of each Observable in RxJS'
    },
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
    summary: {
      ja: '新しい言語を学んだ時に毎回作るゲームをAngularの時も作りました。その後、勉強も兼ねてPWA化してみました。',
      en: 'Everytime I learn the new language, I developed this game. This one is Angular version. Turned into PWA later for learning purpose.'
    },
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
