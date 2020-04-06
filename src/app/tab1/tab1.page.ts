import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

    chartData: ChartDataSets[] = [{ data: [], label: 'Total Power Consumption' }];
    chartLabels: Label[];
    public moneyTotal: string;
    public powerTotal: string;

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
            backgroundColor: 'Magenta'
        }
    ];
    chartType = 'line';
    showLegend = true;

    timeframe = '1';

    constructor(private http: HttpClient) {}

    openUrl() { window.open('https://thesis2020.000webhostapp.com/api/device1off.php', '_system'); }
    openUrll() { window.open('https://thesis2020.000webhostapp.com/api/device1on.php', '_system'); }

    getData() {
        var query = String(this.timeframe);
        var uri = 'https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=' + encodeURIComponent(query);
        this.http.get(uri).subscribe(
            result => {
                //console.log('res: ', result);
                const powerdata = result;
                let moneyTotal = '0';

                this.chartLabels = [];
                this.chartData[0].data = [];

                for (const entry of powerdata[Symbol.iterator]()) {
                    this.chartLabels.push(entry.Time);
                    this.chartData[0].data.push(entry.Current);
                    moneyTotal = String(parseInt(moneyTotal) + parseInt(entry.Current));
                }
                //console.log('money: ', moneyTotal);
                this.moneyTotal = String(parseInt(moneyTotal) * 1);
                this.powerTotal = String(parseInt(moneyTotal) * 1.5);
            },

        );
        //console.log('data: ', this.chartData);
    }

    ngOnInit() {
        this.getData();
    }
}
