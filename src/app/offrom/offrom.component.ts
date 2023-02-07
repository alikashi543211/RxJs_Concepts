import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-offrom',
  templateUrl: './offrom.component.html',
  styleUrls: ['./offrom.component.css']
})
export class OffromComponent implements OnInit {
    obsMsg;
    constructor(private _designUtility:DesignUtilityService) { }

    ngOnInit(): void {

        // Of Oberator
        const Obs1 = of('Anup', 'Shakhar', 'Sharma');

        Obs1.subscribe(res => {
            this._designUtility.print(res, 'elContainer')
        });

        // Of Operator Parameter of Object Type
        const Obs2 = of({a: 'Anup', b: 'Shekhar', c:'Sharma'});
        Obs2.subscribe(res => {
            this.obsMsg = res;
        });

        // From Operator
        let Arr = ['Uxtrendz', 'John', 'Alex'];
        const Obs3 = from(Arr);
        Obs3.subscribe(res => {
            this._designUtility.print(res, 'elContainer2');
        });

        const promise = new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve("Promise Resolved");
            }, 5000);
        });

        // From - Promise To Observable
        const Obs4 = from(promise);
        Obs4.subscribe(res => {
            this._designUtility.print(res, "elContainer3");
        });

        // From - String To Observable
        const Obs5 = from("Welcome To Uxtrendz");
        Obs5.subscribe(res => {
            console.log("From String => "+res);
            this._designUtility.print(res, "elContainer4");
        })

    }

}
