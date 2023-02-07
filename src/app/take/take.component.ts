import { DesignUtilityService } from './../services/design-utility.service';
import { interval, take, from, takeLast, takeUntil, timer, fromEvent, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

    randomNames = [
        'Anup',
        'Shekhar',
        'Sharma',
        'Uxtrendz',
        'John',
        'Alex',
        'Robert'
    ];
    constructor(private _du:DesignUtilityService) { }

    ngOnInit(): void {

        const nameSource = from(this.randomNames);

        // Ex - 01 | Take

        nameSource.pipe(
            take(5)
        )
        .subscribe(res => {
            console.log(res)
            this._du.print(res, 'elContainer1');
        })

        // Ex - 02 | TakeLast

        nameSource.pipe(
            takeLast(5)
        )
        .subscribe(res => {
            console.log(res)
            this._du.print(res, 'elContainer2');
        })

        // Ex - 03 | TakeUntil
        // const timerObs = timer(3000);
        const fromEventObs = fromEvent(document, 'click');
        const source = interval(1000);
        source.pipe(
            takeUntil(fromEventObs),
            map(data => 'Number ' + data)
        )
        .subscribe(res => {
            console.log(res)
            this._du.print(res, 'elContainer3');
        })

    }

}
