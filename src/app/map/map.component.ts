import { DesignUtilityService } from './../services/design-utility.service';
import { interval, Subscription, map, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    sub1: Subscription;
    sub2: Subscription;
    msg1;
    msg2;
    constructor(private _du:DesignUtilityService) { }

    ngOnInit(): void {

        // Ex - 01
        const broadCastVideos = interval(1000);
        this.sub1 = broadCastVideos.pipe(
            map(data => 'Video ' + data)
        )
        .subscribe(
            (res) => {
                this.msg1 = res;
            },
        );

        setTimeout(
            () => {
                this.sub1.unsubscribe();
            },
            10000
        );

        // Ex - 02
        const broadCastVideos2 = interval(1000);
        this.sub2 = broadCastVideos2.pipe(
            map(data => data * 3)
        )
        .subscribe(
            (res) => {
                this.msg2 = res;
            },
        );

        setTimeout(
            () => {
                this.sub2.unsubscribe();
            },
            10000
        );

        // Ex - 03
        let arr = [
            { id: 1, name: 'Anup'},
            { id: 2, name: 'Pankaj'},
            { id: 3, name: 'Tanmay'},
            { id: 4, name: 'Ashish'},
            { id: 5, name: 'Husnain'},
            { id: 6, name: 'Rajesh'},
            { id: 7, name: 'Vivek'},
            { id: 8, name: 'Janet'},
        ];
        const broadCastVideos3 = from(arr);
        broadCastVideos3.pipe(
            map(data => data.name)
        )
        .subscribe(
            (res) => {
                this._du.print(res, 'elContainer');
            },
        );
    }

}
