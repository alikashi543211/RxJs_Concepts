import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of, delay } from 'rxjs';
import { map, switchAll, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

    constructor(private _du:DesignUtilityService) { }

    getData(data)
    {
        return of(data + ' Video Uploaded').pipe(
            delay(1000)
        );
    }

    ngOnInit(): void {

        const source = from(['Tech', 'Comedy', 'News']);

        // Ex - 01 | Map
        source.pipe(
            map(data => this.getData(data))
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer1')
        });

        // Ex - 02 | Map + SwitchAll
        source.pipe(
            map(data => this.getData(data)),
            switchAll()
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer2')
        });

        // Ex - 03 | switchMap
        source.pipe(
            switchMap(data => this.getData(data))
        )
        .subscribe(res => {
            this._du.print(res, 'elContainer3')
        });

    }



}
