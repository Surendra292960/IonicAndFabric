import { Component } from '@angular/core';

@Component({
  selector: 'page-changingcolortoolbar',
  template: `
    <ion-toolbar color="primary">
      <ion-title>Toolbar</ion-title>
    </ion-toolbar>


    <ion-toolbar color="secondary">
      <ion-title>Toolbar</ion-title>
    </ion-toolbar>

    <ion-toolbar color="danger">
      <ion-title>Toolbar</ion-title>
    </ion-toolbar>


    <ion-toolbar color="dark">
      <ion-title>Toolbar</ion-title>
    </ion-toolbar>
  `
})
export class ChangingcolortoolbarPage {}
