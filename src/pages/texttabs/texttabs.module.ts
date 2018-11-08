import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabBasicContentPage,BasicPage2 } from './texttabs';

@NgModule({
  declarations: [
    TabBasicContentPage,
    BasicPage2
  ],
  imports: [
    IonicPageModule.forChild(BasicPage2),
  ],
})
export class TexttabsPageModule {}
