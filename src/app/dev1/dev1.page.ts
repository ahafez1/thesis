import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dev1',
  templateUrl: './dev1.page.html',
  styleUrls: ['./dev1.page.scss'],
})
export class Dev1Page {

    chartData: ChartDataSets[] = [{ data: [], label: 'Power Consumption' }];
    chartLabels: Label[];

    // Options
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
            borderColor: '#000000',
            backgroundColor: 'Magenta'
        }
    ];
    chartType = 'line';
    showLegend = false;

    // For search
    stock = '';
    timeframe: any;

    constructor(private http: HttpClient) {
    }

    getData() {
        this.http.get(`https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=1`).subscribe(
            res => {
                this.chartData;
                console.log(this.chartData[0])
        });
    }

    typeChanged(e) {
        const on = e.detail.checked;
        this.chartType = on ? 'line' : 'bar';
    }
}