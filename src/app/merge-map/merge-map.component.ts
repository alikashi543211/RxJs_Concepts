import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

    constructor(private _du:DesignUtilityService) { }

    getVideo(data)
    {
        return of(data + " Video Uploaded");
    }

    ngOnInit(): void {
        const videoList = [
            'Tech',
            'Comedy',
            'News',
        ];
        const mapObservable = from(videoList);

        // Ex - 01 | Map
        mapObservable.pipe(
            map(data => this.getVideo(data))
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer1');
        });

        // Ex - 02 | Map + MergeAll
        mapObservable.pipe(
            map(data => this.getVideo(data)),
            mergeAll()
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer2');
        });

        // Ex - 02 | MergeMap
        mapObservable.pipe(
            mergeMap(data => this.getVideo(data))
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer3');
        });
    }

}
