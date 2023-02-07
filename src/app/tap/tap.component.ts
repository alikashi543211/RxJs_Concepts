import { DesignUtilityService } from './../services/design-utility.service';
import { interval, toArray, map, Subscription, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
    sub1: Subscription;
    sub2: Subscription;
    myColor;

    constructor(private _du:DesignUtilityService) { }

    ngOnInit(): void {

        // Ex - 01
        const Arr = [
            'Anup',
            'Shekhar',
            'Sharma',
            'Uxtrendz',
            'John',
            'Alex',
            'Robert'
        ];
        const source = interval(1500);
        this.sub1 = source.pipe(
            tap(data => {
                console.log('tap before => ' + data);
                if(data > 6)
                {
                    this.sub1.unsubscribe();
                }
            }),
            map(data => Arr[data]),
            tap(data => {
                console.log('tap after => ' + data);
            })
        )
        .subscribe(res => {
            console.log(res);
            this._du.print(res, 'elContainer')
        });

        // Ex - 02
        const Arr2 = [
            'Red',
            'Green',
            'Blue',
            'Orange',
            'Yellow',
            'Purple',
            'Violet'
        ];

        this.sub2 = source.pipe(
            tap(data => {
                console.log('tap ' + data);
                this.myColor = Arr2[data];
                if(data > 6)
                {
                    this.sub2.unsubscribe();
                }
            }),
            map(data => Arr2[data]),
        )
        .subscribe(res => {
            console.log(res);
            this._du.print(res, 'elContainer2')
        });

    }

}
