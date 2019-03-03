import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() imgName: string;
  @Input() name: string;
  @Input() level: string = '1000';
  @ViewChild('front') front: ElementRef;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.render.setStyle(this.front.nativeElement, 'stroke-dasharray', this.level);
  }

}
