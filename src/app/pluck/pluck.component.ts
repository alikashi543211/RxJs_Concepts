import { from, map, toArray, pluck } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

    constructor() { }

    users = [
        {
            name: 'Anup',
            skills: 'Angular',
            job: {
                title: 'Frontend Developer',
                exp : '10 Years'
            }
        },
        {
            name: 'Uxtrendz',
            skills: 'Html, Css',
            job: {
                title: 'Backend Developer',
                exp : '12 Years'
            }
        },
        {
            name: 'John',
            skills: 'Vue Js',
            job: {
                title: 'Laravel Developer',
                exp : '14 Years'
            }
        },
        {
            name: 'Alex',
            skills: 'Javascript',
            job: {
                title: 'Angular Developer',
                exp : '7 Years'
            }
        },
    ];

    data;
    data2;

    ngOnInit(): void {

        // Ex - 01
        from(this.users)
        .pipe(
            // map(data => data.name),
            pluck('name'),
            toArray(),
        )
        .subscribe(res => {
            console.log(res);
            this.data = res;
        })

        // Ex - 02
        from(this.users)
        .pipe(
            // map(data => data.name),
            pluck('job', 'title'),
            toArray(),
        )
        .subscribe(res => {
            console.log(res);
            this.data2 = res;
        })
    }

}
