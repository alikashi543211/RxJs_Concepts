import { fromEvent, map, combineLatest, withLatestFrom, zip, forkJoin, take } from 'rxjs';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit, AfterViewInit {

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
            map(data => data.target.value),
            take(4),
        )


        // Stream 2
        const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
            map(data => data.target.value),
            take(3),
        );

        // Zip
        zip(nameObs, colorObs).subscribe(([name, color]) => {
            this.createBox(name, color, 'elContainer1');
        });

        // ForkJoin
        forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
            this.createBox(name, color, 'elContainer2');
        });

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
