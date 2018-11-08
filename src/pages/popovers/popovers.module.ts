import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicPage1,PopoverPage} from './popovers';

@NgModule({
  declarations: [
    PopoverPage,
    BasicPage1
  ],
  imports: [
    IonicPageModule.forChild(BasicPage1),
  ],
})
export class PopoversPageModule {}
