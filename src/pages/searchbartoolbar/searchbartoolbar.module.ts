import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchbarPage1 } from './searchbartoolbar';

@NgModule({
  declarations: [
    SearchbarPage1,
  ],
  imports: [
    IonicPageModule.forChild(SearchbarPage1),
  ],
})
export class SearchbartoolbarPageModule {}
