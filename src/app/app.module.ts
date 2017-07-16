import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
=======
import { LocalizacaoService } from './service/localizacao.service';
import { Geolocation } from '@ionic-native/geolocation';
>>>>>>> bbedfa8312efc375fcc22d3b3a3634a1c354a27d

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    DataService,
=======
    LocalizacaoService,
    Geolocation,
>>>>>>> bbedfa8312efc375fcc22d3b3a3634a1c354a27d
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
