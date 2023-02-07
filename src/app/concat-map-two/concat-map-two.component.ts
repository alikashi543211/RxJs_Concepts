import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, map, of, mergeMap, delay, concatMap } from 'rxjs';

@Component({
  selector: 'app-concat-map-two',
  templateUrl: './concat-map-two.component.html',
  styleUrls: ['./concat-map-two.component.css']
})
export class ConcatMapTwoComponent implements OnInit {

    constructor(private _du:DesignUtilityService) { }

    notifyData = [
        {
            name: 'Facebook',
            icon: 'assets/fb-icon.png',
            time: '4 Second Ago',
            img: 'https://placeimg.com/50/50/tech/4',
            strong: 'Alax Johnso',
            p: 'Commented on youer #Uxtrendz Post: Awesome Post !!!! Thanks...',

        },
        {
            name: 'Twitter',
            icon: 'assets/fb-icon.png',
            time: '3 Second Ago',
            img: 'https://placeimg.com/50/50/tech/3',
            strong: 'James Smith',
            p: 'Commented on youer #Uxtrendz Post: Awesome Post !!!! Thanks...',

        },
        {
            name: 'Facebook',
            icon: 'assets/fb-icon.png',
            time: '2 Second Ago',
            img: 'https://placeimg.com/50/50/tech/2',
            strong: 'Alax Johnso',
            p: 'Commented on youer #Uxtrendz Post: Awesome Post !!!! Thanks...',

        },
        {
            name: 'Facebook',
            icon: 'assets/fb-icon.png',
            time: '1 Second Ago',
            img: 'https://placeimg.com/50/50/tech/1',
            strong: 'Alax Johnso',
            p: 'Commented on youer #Uxtrendz Post: Awesome Post !!!! Thanks...',

        },
    ];

    ngOnInit(): void {
        from(this.notifyData).pipe(
            concatMap(data => this.getHtml(data))
        )
        .subscribe(res => {
            this._du.print2(res, 'elContainer');
        })
    }

    getHtml(data)
    {
        let testData =
            `<div class="header">
                <div class="app">
                    <img src='${data.icon}' alt="" width="20">
                    Facebook
                </div>
                <div class="time">${data.time}</div>
            </div>
            <div class="body">
                <img src="${data.img}" alt="" class="item-img">
                <strong>${data.strong}</strong>
                <p>
                    ${data.p}
                </p>
            </div>`;

        return of(testData).pipe(
            delay(2000)
        );
    }

}
