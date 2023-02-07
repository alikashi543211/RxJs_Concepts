import { combineLatest, elementAt, fromEvent, map, withLatestFrom } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit, AfterViewInit {

    constructor() { }
    names = [
        'Anup',
        'Shekhar',
        'Sharma',
        'Uxtrendz',
        'John',
        'Alex',
        'Robert',
        'Sam'
    ];
    colors = [
        'red',
        'green',
        'blue',
        'yellow',
        'violet',
        'purple',
        'grey'
    ];
    @ViewChild('name') name:ElementRef;
    @ViewChild('color') color:ElementRef;

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {

        // Stream 1
        const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
            map(data => data.target.value)
        )


        // Stream 2
        const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
            map(data => data.target.value)
        );

        // CombineLatest
        combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
            // console.log(name, color);
            this.createBox(name, color, 'elContainer1');
        });

        // WithLatestFrom
        nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
            // console.log(name, color);
            this.createBox(name, color, 'elContainer2');
        })

    }

    createBox(name, color, containerId)
    {
        let elem = document.createElement('div');
        elem.innerText = name;
        elem.setAttribute('class', color)
        let elContainer = document.getElementById(containerId);
        elContainer.append(elem);
    }


}
