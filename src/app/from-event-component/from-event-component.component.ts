import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-from-event-component',
  templateUrl: './from-event-component.component.html',
  styleUrls: ['./from-event-component.component.css']
})
export class FromEventComponentComponent implements OnInit, AfterViewInit {

    constructor(private _designUtility: DesignUtilityService) { }

    @ViewChild('addBtn') addBtn:ElementRef;

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let counter = 1;
        fromEvent(this.addBtn.nativeElement, 'click').subscribe( (res) => {
            this._designUtility.print('Video ' + counter, 'elContainer');
            this._designUtility.print('Video ' + counter, 'elContainer2');
            counter++;
        });
    }

}
