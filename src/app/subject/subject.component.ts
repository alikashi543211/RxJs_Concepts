import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

    username;
    constructor(private _designUtilityService:DesignUtilityService) { }

    ngOnInit(): void {
        this._designUtilityService.exclusive.next(true);
        this._designUtilityService.username.subscribe(res => {
            this.username = res;
        })
    }

    ngOnDestroy(): void {
        this._designUtilityService.exclusive.next(false);
    }


}
