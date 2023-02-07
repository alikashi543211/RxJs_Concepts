import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, take, toArray, of } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

    sourceSubs:Subscription;
    users = [
        {name: 'Anup', skill: 'Angular'},
        {name: 'Shekhar', skill: 'Html, Css'},
        {name: 'Sharma', skill: 'Javascript'},
        {name: 'Uxtrendz', skill: 'TypeScript'},
    ];
    constructor() { }

    ngOnInit(): void {

        // Ex - 01
        const source = interval(1000);
        this.sourceSubs = source.pipe(
            take(5),
            toArray()
        ).subscribe(res => {
            console.log(res);
        });

        // Ex - 02
        const obs1 = from(this.users);
        obs1.pipe(
            toArray()
        ).subscribe(res => {
            console.log(res)
        });

        // Ex - 03
        const obs2 = of('Anup', 'Shekhar', 'Sharma', 'Uxtrendz');
        obs2.pipe(
            toArray()
        ).subscribe(res => {
            console.log(res);
        })
    }

}
