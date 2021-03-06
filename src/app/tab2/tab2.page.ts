import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    constructor(private router: Router) { }
    GoToSecondPage() {
        this.router.navigate(['dev1']);
    }

    GoToThirdPage() {
        this.router.navigate(['dev2']);
    }
}