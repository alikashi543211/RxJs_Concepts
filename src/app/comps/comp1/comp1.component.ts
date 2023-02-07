import { DesignUtilityService } from './../../services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

    username;
    constructor(private _designUtilityService:DesignUtilityService) { }

    ngOnInit(): void {
        this._designUtilityService.username.subscribe(res => {
            this.username = res;
        })
    }

    changeUsername(userName)
    {
        this._designUtilityService.username.next(userName);
    }

}
