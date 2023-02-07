import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements AfterViewInit {

    msg1;
    msg2;

    @ViewChild('inputOne') inputOne: ElementRef;
    @ViewChild('inputTwo') inputTwo: ElementRef;

    constructor() { }

    ngAfterViewInit(): void {

        // Ex - 01 : DebounceTime
        const obs = fromEvent<any>(this.inputOne.nativeElement, 'keyup');
        obs.pipe(
            map(event => event.target.value),
            debounceTime(1000)
        )
        .subscribe(res => {
            console.log(res);
            this.msg1 = res;
            setTimeout(() => {
                this.msg1 = null;
            }, 500);
        })

        // Ex - 02 : DistinctUntilChange
        const obs2 = fromEvent<any>(this.inputTwo.nativeElement, 'keyup');
        obs2.pipe(
            map(event => event.target.value),
            debounceTime(1000),
            distinctUntilChanged()
        )
        .subscribe(res => {
            console.log(res);
            this.msg2 = res;
            setTimeout(() => {
                this.msg2 = null;
            }, 500);
        })
    }

}
