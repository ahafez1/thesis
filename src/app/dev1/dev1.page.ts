import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dev1',
  templateUrl: './dev1.page.html',
  styleUrls: ['./dev1.page.scss'],
})
export class Dev1Page {

    chartData: ChartDataSets[] = [{ data: [], label: 'Power Consumption' }];
    chartLabels: Label[];

    // Options
    //chartLabels = [ 'time', 'others'];

    chartOptions = {
        responsive: true,
        title: {
            display: true,
            text: 'Power Consumed by Device 1'
        },
        pan: {
            enabled: false,
            mode: 'xy'
        },
        zoom: {
            enabled: true,
            mode: 'xy'
        }
    };
    chartColors: Color[] = [
        {
            borderColor: 'Black',
            backgroundColor: 'Magenta'
        }
    ];
    chartType = 'line';
    showLegend = false;

    // For search

    timeframe: any;

    constructor(private http: HttpClient) {
    }

    getData() {
        var query = String(this.timeframe);
        var uri = 'https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=' + encodeURIComponent(query);
        this.http.get(uri, { responseType: 'json' }).subscribe(
            data => {
                this.chartData = data as any[];	 // FILL THE CHART ARRAY WITH DATA.
                console.log(data);
                let clone = JSON.parse(JSON.stringify(this.chartData));
                clone[0].data = data;
                this.chartData = clone;
            },

        );

    }


    ngOnInit() {
        var query = String(this.timeframe);
        var uri = 'https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=' + encodeURIComponent(query);
        this.http.get(uri, { responseType: 'json' }).subscribe(
            data => {
                this.chartData = data as any[];	 // FILL THE CHART ARRAY WITH DATA.
                console.log(data);
            },
            
        );
        
    }


    typeChanged(e) {
        const on = e.detail.checked;
        this.chartType = on ? 'line' : 'bar';
    }
}