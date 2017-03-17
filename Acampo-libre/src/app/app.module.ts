import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SinglePage } from '../pages/campsite-single/campsite-single';
import {CampsitesPage} from '../pages/campsites/campsites';
import{MainPage} from '../pages/main/main';
import{MapPage} from '../pages/maps/maps';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SinglePage,
    CampsitesPage,
    MapPage,
    MainPage




  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SinglePage,
    CampsitesPage,
    MainPage,
    MapPage




  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
