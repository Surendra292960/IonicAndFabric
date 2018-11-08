import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardImagePage } from './card-image';

@NgModule({
  declarations: [
    CardImagePage,
  ],
  imports: [
    IonicPageModule.forChild(CardImagePage),
  ],
})
export class CardImagePageModule {}
