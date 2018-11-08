import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconTextPage, TabIconTextContentPage } from './textandicontabs';

@NgModule({
  declarations: [
    IconTextPage,
    TabIconTextContentPage

  ],
  imports: [
    IonicPageModule.forChild(IconTextPage),
  ],
})
export class TextandicontabsPageModule {}
