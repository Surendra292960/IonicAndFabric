import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModelPage ,ModalContentPage} from './model';

@NgModule({
  declarations: [
    ModelPage,
    ModalContentPage
  ],
  imports: [
    IonicPageModule.forChild(ModelPage),
  ],
})
export class ModelPageModule {}
