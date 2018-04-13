import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RecepiePage } from '../pages/recepie/recepie';
import { RecepiesPage } from '../pages/recepies/recepies';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { EditRecepiePage } from '../pages/edit-recepie/edit-recepie';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    RecepiePage,
    RecepiesPage,
    ShoppingListPage,
    EditRecepiePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecepiePage,
    RecepiesPage,
    ShoppingListPage,
    EditRecepiePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
