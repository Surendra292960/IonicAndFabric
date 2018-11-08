import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonComponentPage } from './button-component';

@NgModule({
  declarations: [
    ButtonComponentPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonComponentPage),
  ],
})
export class ButtonComponentPageModule {}
