import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromptAlertPage } from './prompt-alert';

@NgModule({
  declarations: [
    PromptAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(PromptAlertPage),
  ],
})
export class PromptAlertPageModule {}
