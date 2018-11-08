import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenueBarPage } from './menue-bar';

@NgModule({
  declarations: [
    MenueBarPage,
  ],
  imports: [
    IonicPageModule.forChild(MenueBarPage),
  ],
})
export class MenueBarPageModule {}
