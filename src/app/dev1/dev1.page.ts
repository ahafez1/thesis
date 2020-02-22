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

    // For search

    timeframe = '30';

    constructor(private http: HttpClient) {
    }

    getData() {
        var query = String(this.timeframe);
        var uri = 'https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=' + encodeURIComponent(query);
        this.http.get(uri).subscribe(
            result => {
                //this.chartData = data as any[];	 // FILL THE CHART ARRAY WITH DATA.
                console.log('res: ',result);
                let powerdata = result;

                this.chartLabels = [];
                this.chartData[0].data = [];

                for (let entry of powerdata) {
                    this.chartLabels.push(entry.Time);
                    this.chartData[0].data.push(entry.Current);
                }
            },

        );
        console.log('data: ',this.chartData);
    }


    ngOnInit() {
        var query = String(this.timeframe);
        var uri = 'https://thesis2020.000webhostapp.com/api/specificTime.php?Device=1&Time=' + encodeURIComponent(query);
        this.http.get(uri, { responseType: 'json' }).subscribe(
            result => {
                //this.chartData = data as any[];	 // FILL THE CHART ARRAY WITH DATA.
                console.log('res: ', result);
                let powerdata = result;

                this.chartLabels = [];
                this.chartData[0].data = [];

                for (let entry of powerdata) {
                    this.chartLabels.push(entry.Time);
                    this.chartData[0].data.push(parseInt(entry['Current']));
                }
            },
        );
        console.log('data: ', this.chartData);  
    }


    typeChanged(e) {
        const on = e.detail.checked;
        this.chartType = on ? 'line' : 'bar';
    }
}