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
    public money: string;

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

    constructor(private http: HttpClient) {
    }

    getData() {
        var query = String(this.timeframe);
        var uri = 'https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=' + encodeURIComponent(query);
        this.http.get(uri).subscribe(
            result => {
                //this.chartData = data as any[];	 // FILL THE CHART ARRAY WITH DATA.
                console.log('res: ', result);
                const powerdata = result;
                let money = '0';

                this.chartLabels = [];
                this.chartData[0].data = [];

                for (const entry of powerdata[Symbol.iterator]()) {
                    this.chartLabels.push(entry.Time);
                    this.chartData[0].data.push(entry.Current);
                    money = String(parseInt(money) + parseInt(entry.Current));
                }
                console.log('money: ', money);
                this.money = money;
            },

        );
        console.log('data: ', this.chartData);
    }

    ngOnInit() {
        this.getData();
    }
}