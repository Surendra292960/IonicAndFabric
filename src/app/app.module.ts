import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage, } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert';
import { Alert2Page } from '../pages/alert2/alert2';
import { RadioAlertPage } from '../pages/radio-alert/radio-alert';
import { PromptAlertPage } from '../pages/prompt-alert/prompt-alert';
import{CheckBoxAlertPage} from '../pages/check-box-alert/check-box-alert';
import{BadgePage} from '../pages/badge/badge';
import { ButtonPage } from '../pages/button/button';
import { ButtonStylePage } from '../pages/button-style/button-style';
import{ButtonClearStylePage}from '../pages/button-clear-style/button-clear-style';
import{RoundButtonPage}from '../pages/round-button/round-button';
import{BlockButtonPage}from '../pages/block-button/block-button';
import{FullButtonPage}from '../pages/full-button/full-button';
import{ButtonSizePage}from '../pages/button-size/button-size';
import{IconButtonPage}from '../pages/icon-button/icon-button';
import{ButtonComponentPage}from '../pages/button-component/button-component';
import{CardPage}from'../pages/card/card';
import{CardListPage}from '../pages/card-list/card-list';
import{CardImagePage}from '../pages/card-image/card-image';
import{BackgroundImagePage}from '../pages/background-image/background-image';
import{SocialCardPage} from '../pages/social-card/social-card';
import{AdvanceCardPage}from '../pages/advance-card/advance-card';
import{MapCardPage}from '../pages/map-card/map-card';
import{CheckBoxPage}from '../pages/check-box/check-box';
import{DateTimePage}from  '../pages/date-time/date-time';
import{FabsPage}from '../pages/fabs/fabs';
import{GesturePage}from '../pages/gesture/gesture';
import{GridPage}from '../pages/grid/grid';
import{IconPage}from '../pages/icon/icon';
import{FixedInlineLablesPage}from '../pages/fixed-inline-lables/fixed-inline-lables';
import{FloatingLablesPage}from '../pages/floating-lables/floating-lables';
import{InputInlinePage}from '../pages/input-inline/input-inline';
import{InsetLablesPage}from '../pages/inset-lables/inset-lables';
import{PlaceholderPage}from '../pages/placeholder/placeholder';
import{StackLablesPage}from '../pages/stack-lables/stack-lables';
import{ListPage}from '../pages/list/list';
import{InsetListPage}from '../pages/inset-list/inset-list';
import{ListDividersPage}from '../pages/list-dividers/list-dividers';
import{ListHeadersPage}from '../pages/list-headers/list-headers';
import{ListIconPage}from '../pages/list-icon/list-icon';
import{AvatarListPage}from '../pages/avatar-list/avatar-list';
import{MultilineListPage}from '../pages/multiline-list/multiline-list';
import{SlidingListPage}from '../pages/sliding-list/sliding-list';
import{ThumbnailPage}from '../pages/thumbnail/thumbnail';
import{LoadingPage}from '../pages/loading/loading';
import{MenusPage,PageOne,PageTwo,PageThree}from '../pages/menus/menus';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import{NavigationPage}from '../pages/navigation/navigation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    Alert2Page,
    RadioAlertPage,
    PromptAlertPage,
    CheckBoxAlertPage,
    BadgePage,
    ButtonPage,
    ButtonStylePage,
    ButtonClearStylePage,
    RoundButtonPage,
    BlockButtonPage,
    FullButtonPage,
    ButtonSizePage,
    IconButtonPage,
    ButtonComponentPage,
    CardPage,
    CardListPage,
    CardImagePage,
    BackgroundImagePage,
    SocialCardPage,
    AdvanceCardPage,
    MapCardPage,
    CheckBoxPage,
    DateTimePage,
    FabsPage,
    GesturePage,
    GridPage,
    IconPage,
    FixedInlineLablesPage,
    FloatingLablesPage,
    InputInlinePage,
    InsetLablesPage,
    PlaceholderPage,
    StackLablesPage,
    ListPage,
    InsetListPage,
    ListDividersPage,
    ListHeadersPage,
    ListIconPage,
    AvatarListPage,
    MultilineListPage,
    SlidingListPage,
    ThumbnailPage,
    LoadingPage,
    MenusPage,PageOne,PageTwo,PageThree,
    NavigationPage,
   
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertPage,
    Alert2Page,
    RadioAlertPage,
    PromptAlertPage,
    CheckBoxAlertPage,
    BadgePage,
    ButtonPage,
    ButtonStylePage,
    ButtonClearStylePage,
    RoundButtonPage,
    BlockButtonPage,
    FullButtonPage,
    ButtonSizePage,
    IconButtonPage,
    ButtonComponentPage,
    CardPage,
    CardListPage,
    CardImagePage,
    BackgroundImagePage,
    SocialCardPage,
    AdvanceCardPage,
    MapCardPage,
    CheckBoxPage,
    DateTimePage,
    FabsPage,
    GesturePage,
    GridPage,
    IconPage,
    FixedInlineLablesPage,
    FloatingLablesPage,
    InputInlinePage,
    InsetLablesPage,
    PlaceholderPage,
    StackLablesPage,
    ListPage,
    InsetListPage,
    ListDividersPage,
    ListHeadersPage,
    ListIconPage,
    AvatarListPage,
    MultilineListPage,
    SlidingListPage,
    ThumbnailPage,
    LoadingPage,
    MenusPage,     
    PageOne,PageTwo,PageThree,
    NavigationPage
   
  

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
