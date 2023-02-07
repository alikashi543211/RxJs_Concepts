import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
    intervalSubscription: Subscription;
    obsMsg;
    constructor(private _designUtility:DesignUtilityService) { }

    ngOnInit(): void {
        // const broadCastVideos = interval(1000);
        const broadCastVideos = timer(5000, 1000);
        this.intervalSubscription = broadCastVideos.subscribe( (res) =>  {
            console.log(res);
            this.obsMsg = 'Video ' + res;
            this._designUtility.print(this.obsMsg, 'elContainer');
            this._designUtility.print(this.obsMsg, 'elContainer1');
            this._designUtility.print(this.obsMsg, 'elContainer2');
            if(res >= 5)
            {
                this.intervalSubscription.unsubscribe();
            }
        })
    }

}
