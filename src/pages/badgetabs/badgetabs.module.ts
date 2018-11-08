import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconTextPage1,TabIconTextContentPage1 } from './badgetabs';

@NgModule({
  declarations: [
    IconTextPage1,
    TabIconTextContentPage1
  ],
  imports: [
    IonicPageModule.forChild(IconTextPage1),
  ],
})
export class BadgetabsPageModule {}
