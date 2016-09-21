import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { ContasPage } from './pages/contas/contas';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  home: any = HomePage;
  contas: any = ContasPage;
  rootPage: any = this.home;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  };

  openPage(page){
    this.rootPage = page;
  };
}

ionicBootstrap(MyApp);
