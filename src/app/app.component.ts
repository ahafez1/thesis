import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
    chartOptions = {
        responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    }

    labels = ['JAN', 'FEB'];

    // STATIC DATA FOR THE CHART IN JSON FORMAT.


    // CHART COLOR.
    colors = [
        { // 1st Year.
            backgroundColor: 'rgba(77,83,96,0.2)'
        },
        { // 2nd Year.
            backgroundColor: 'rgba(30, 169, 224, 0.8)'
        }
    ]

    // CHART CLICK EVENT.
    onChartClick(event) {
        console.log(event);
    }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
