import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  selector:'page-segmenttoolbar',
  templateUrl: 'segmenttoolbar.html'
})
export class SegmentPage1 {
  isAndroid: boolean = false;
  selectedSegment: string = 'hot';

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}