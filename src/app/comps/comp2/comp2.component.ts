import { DesignUtilityService } from './../../services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

    username;
    constructor(private _designUtilityService:DesignUtilityService) { }

    ngOnInit(): void {
        this._designUtilityService.username.subscribe(res => {
            this.username = res;
        })
    }

    changeValue(username)
    {
        this._designUtilityService.username.next(username);
    }


}
