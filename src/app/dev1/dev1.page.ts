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
export class Dev1Page implements OnInit{

    chartData: ChartDataSets[] = [{ data: [], label: 'Power Consumption' }];
    chartLabels: Label[];
    public money1: string;

    chartOptions = {
        responsive: true,
        title: {
            display: true,
            text: 'Power Consumed by Device 1'
        },
        pan: {
            enabled: true,
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
            backgroundColor: '#16FF00'
        }
    ];
    chartType = 'line';
    showLegend = true;

    timeframe = '30';

    constructor(private http: HttpClient) {
    }

    openUrl() { window.open('https://thesis2020.000webhostapp.com/api/device1off.php', '_system'); }
    openUrll() { window.open('https://thesis2020.000webhostapp.com/api/device1on.php', '_system'); }

    getData() {
        var query = String(this.timeframe);
        var uri = 'https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=' + encodeURIComponent(query);
        this.http.get(uri).subscribe(
            result => {
                //console.log('res: ', result);
                const powerdata = result;
                let money1 = '0';

                this.chartLabels = [];
                this.chartData[0].data = [];

                for (const entry of powerdata[Symbol.iterator]()) {
                    this.chartLabels.push(entry.Time);
                    this.chartData[0].data.push(entry.Current);
                    money1 = String(parseInt(money1) + parseInt(entry.Current));
                }
                //console.log('money: ', money1);
                this.money1 = String(parseInt(money1) * 1.5);
            },

        );
        //console.log('data: ', this.chartData);
    }

    ngOnInit() {
        this.getData();
    }
}