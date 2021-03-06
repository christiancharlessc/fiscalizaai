import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { LocalizacaoService } from './service/localizacao.service';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MissoesPage } from '../pages/missoes/missoes';
import { MissaoPage } from '../pages/missao/missao';
import { PerfilPage } from '../pages/perfil/perfil';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MissoesPage,
    MissaoPage,
    PerfilPage,
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
    MissoesPage,
    MissaoPage,
    PerfilPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    LocalizacaoService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
