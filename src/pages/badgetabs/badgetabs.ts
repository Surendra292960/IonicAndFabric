import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Badge Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
export class TabIconTextContentPage1 {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}


@Component({
  selector:'page-badgeicontabs',
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'primary'">
      <ion-tab tabIcon="water" tabTitle="Water" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Life" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Fire" [root]="rootPage"></ion-tab>
      <ion-tab tabIcon="magnet" tabTitle="Force" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class IconTextPage1 {
  rootPage = TabIconTextContentPage1;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}