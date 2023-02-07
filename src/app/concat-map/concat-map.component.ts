import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, from, map, mergeMap, of, delay } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

    constructor(private _du:DesignUtilityService) { }

    ngOnInit(): void {

        const source = from(['Tech', 'Comedy', 'News']);

        // Ex - 01 | Map
        source.pipe(
            map(data => this.getVideo(data))
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer1');
        });

        // Ex - 02 | Map + ConcatAll
        source.pipe(
            mergeMap(data => this.getVideo(data))
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer2');
        });

        // Ex - 03 | concatMap
        source.pipe(
            concatMap(data => this.getVideo(data))
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer3');
        });

    }

    getVideo(data)
    {
        return of(data + " Video Uploaded").pipe(delay(2000));
    }

}
