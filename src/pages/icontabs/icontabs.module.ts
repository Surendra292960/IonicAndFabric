import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabIconContentPage,IconPage1 } from './icontabs';

@NgModule({
  declarations: [
    IconPage1,
    TabIconContentPage
  ],
  imports: [
    IonicPageModule.forChild(IconPage1),
  ],
})
export class IcontabsPageModule {}
